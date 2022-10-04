import { validateCartItems } from "use-shopping-cart/src/serverUtil";
import Stripe from "stripe";
import { sanityClient } from "../../../lib/sanity/client";
import { merchQuery } from "../../../lib/sanity/merchQuery";
import { NextApiRequest, NextApiResponse } from "next";
import SessionCreateParams from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-08-01",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Validate the cart details that were sent from the client.
      const cartItems = req.body;
      //Sanity client performs merchQuery
      let sanityData = await sanityClient.fetch(merchQuery);
      // The POST request is then validated against the data from Sanity.
      const line_items = validateCartItems(sanityData, cartItems);
      const transformed = line_items.map((el) => {
        return {
          price_data: {
            unit_amount: Number(el.price_data?.unit_amount) * 100,
            ...el.price_data,
          },
          quantity: Number(el.quantity),
        };
      });
      console.log(line_items);

      const checkoutSession = await stripe.checkout.sessions.create({
        line_items: line_items,
        mode: "payment",
        success_url: `http://localhost:3000/`,
        cancel_url: `http://localhost:3000/`,
      });
      console.log(checkoutSession);
      res.status(200).json(checkoutSession);
    } catch (err) {
      console.log("err");
      console.log(process.env.STRIPE_SECRET_KEY);
      let message = "Unknown Error";
      if (err instanceof Error) message = err.message;
      res.status(500).json({ statusCode: 500, message: message });
    }
  } else {
    console.log("hi");
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
