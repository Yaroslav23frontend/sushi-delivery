import Cart from "../components/cart/Cart";
import { GetServerSideProps } from "next";
import { mapQuery } from "../lib/sanity/mapQuery";
import { sanityClient } from "../lib/sanity/client";
import { SuccessPageProps } from "../types/successPage";
export default function CartPage({ map }: SuccessPageProps) {
  return <Cart map={map} />;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const map = await sanityClient.fetch(mapQuery);
  return {
    props: {
      map,
    },
  };
};
