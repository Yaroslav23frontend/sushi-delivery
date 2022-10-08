import Main from "../components/Main";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Container from "../components/container/Container";
import { GetServerSideProps } from "next";
import { sanityClient } from "../lib/sanity/client";
import { ProductsProps } from "../components/product/types";
import { searchQuery } from "../lib/sanity/searchQuery";
import dynamic from "next/dynamic";
import Search from "../components/filters/search/Search";

const SearchDinamic = dynamic(
  () => import("../components/searchDynamic/SearchDinamic"),
  {
    ssr: false,
  }
);
export default function SearchPage({ products }: ProductsProps) {
  return (
    <>
      <Nav />
      <Main>
        <Container>
          <Search />
          <SearchDinamic products={products} />
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
  if (!context.query.q) {
    return {
      props: {
        posts: [],
      },
    };
  }
  const products = await sanityClient.fetch(searchQuery, {
    q: context.query.q,
  });
  if (!products) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products,
    },
  };
};
