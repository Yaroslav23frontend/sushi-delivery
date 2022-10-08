import { validateCartItems } from "use-shopping-cart/src/serverUtil";
import Stripe from "stripe";
import { sanityClient } from "../../../lib/sanity/client";
import { merchQuery } from "../../../lib/sanity/merchQuery";
import { NextApiRequest, NextApiResponse } from "next";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-08-01",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Cache-Control', 's-maxage=10');
  if (req.method === "POST") {
    try {
      // Validate the cart details that were sent from the client.
      const cartItems = req.body;
      //Sanity client performs merchQuery
      let sanityData = await sanityClient.fetch(merchQuery);
      // The POST request is then validated against the data from Sanity.
      const line_items = validateCartItems(sanityData, cartItems);
      const checkoutSession = await stripe.checkout.sessions.create({
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        line_items: line_items,
        mode: "payment",
        success_url: process.env.SUCCESS_URL || `http://localhost:3000/`,
        cancel_url: process.env.NEXT_URL || `http://localhost:3000/`,
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
