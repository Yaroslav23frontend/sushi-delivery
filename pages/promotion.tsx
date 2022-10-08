import { ProductsProps } from "../components/product/types";
import { sanityClient } from "../lib/sanity/client";
import { promotionProductsQuery } from "../lib/sanity/promotionQuery";
import Nav from "../components/nav/Nav";
import Container from "../components/container/Container";
import Main from "../components/Main";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { mapQuery } from "../lib/sanity/mapQuery";
import { DiscountProps } from "../types/discountPage";
const PromotionDynamic = dynamic(
  () => import("../components/promotionDynamic/PromotionDynamic"),
  {
    ssr: false,
  }
);
const Footer = dynamic(() => import("../components/footer/Footer"), {
  ssr: false,
});
export default function Promotion({ products, map }: DiscountProps) {
  return (
    <>
      <Nav />
      <Main>
        <Container>
          <PromotionDynamic products={products} />
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
  const products = await sanityClient.fetch(promotionProductsQuery);
  const map = await sanityClient.fetch(mapQuery);
  return {
    props: { products, map },
  };
};
