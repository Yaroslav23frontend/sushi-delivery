import { ProductsProps } from "../components/product/types";
import { sanityClient } from "../lib/sanity/client";
import { promotionProductsQuery } from "../lib/sanity/promotionQuery";
import Nav from "../components/nav/Nav";
import Container from "../components/container/Container";
import Main from "../components/Main";
import Footer from "../components/footer/Footer";
import dynamic from "next/dynamic";
const PromotionDynamic = dynamic(
  () => import("../components/promotionDynamic/PromotionDynamic"),
  {
    ssr: false,
  }
);
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
export async function getServerSideProps() {
  const products = await sanityClient.fetch(promotionProductsQuery);
  return {
    props: { products },
  };
}
