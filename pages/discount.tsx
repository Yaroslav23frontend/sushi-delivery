import { sanityClient } from "../lib/sanity/client";
import { discountProductsQuery } from "../lib/sanity/discountQuery";
import Nav from "../components/nav/Nav";
import Container from "../components/container/Container";
import Main from "../components/Main";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { mapQuery } from "../lib/sanity/mapQuery";
import { DiscountProps } from "../types/discountPage";
const DiscountDynamic = dynamic(
  () => import("../components/discountDynamic/DiscountDynamic"),
  {
    ssr: false,
  }
);
const Footer = dynamic(() => import("../components/footer/Footer"), {
  ssr: false,
});
export default function Discount({ products, map }: DiscountProps) {
  return (
    <>
      <Nav />
      <Main>
        <Container>
          <DiscountDynamic products={products} />
        </Container>
      </Main>
      <Footer url={map.url} mainImage={map.mainImage} />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const products = await sanityClient.fetch(discountProductsQuery);
  const map = await sanityClient.fetch(mapQuery);
  return {
    props: { products, map },
  };
};
