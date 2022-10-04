import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
};
const client = sanityClient(config);
export default async function ContactUs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, phone } = JSON.parse(req.body);
  try {
    await client.create({
      _type: "contact",
      name,
      phone,
    });
  } catch (err) {
    console.log(config);
    let message = "Unknown Error";
    if (err instanceof Error) message = err.message;
    console.log(message);
    return res.status(500).json({ message: "Coulden't submit", err });
  }
  return res.status(200).json({ message: "We will contact to you soon" });
}
