import { ProductsProps } from "../components/product/types";
import { sanityClient } from "../lib/sanity/client";
import { promotionProductsQuery } from "../lib/sanity/promotionQuery";
import Nav from "../components/nav/Nav";
import Container from "../components/container/Container";
import Main from "../components/Main";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
const PromotionDynamic = dynamic(
  () => import("../components/promotionDynamic/PromotionDynamic"),
  {
    ssr: false,
  }
);
const Footer = dynamic(() => import("../components/footer/Footer"), {
  ssr: false,
});
export default function Promotion({ products }: ProductsProps) {
  return (
    <>
      <Nav />
      <Main>
        <Container>
          <PromotionDynamic products={products} />
        </Container>
      </Main>
      <Footer />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const products = await sanityClient.fetch(promotionProductsQuery);
  return {
    props: { products },
  };
};
