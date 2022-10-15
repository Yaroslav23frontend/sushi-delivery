import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Container from "../components/container/Container";
import { GetServerSideProps } from "next";
import { sanityClient } from "../lib/sanity/client";
import { searchQuery } from "../lib/sanity/searchQuery";
import dynamic from "next/dynamic";
import { mapQuery } from "../lib/sanity/mapQuery";
import { SearchPageProps } from "../types/searchPage";
const SearchDinamic = dynamic(
  () => import("../components/searchDynamic/SearchDinamic"),
  {
    ssr: false,
  }
);
export default function SearchPage({ products, map }: SearchPageProps) {
  return (
    <>
      <Nav />
      <Main>
        <Container>
          <SearchDinamic products={products} />
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
  const map = await sanityClient.fetch(mapQuery);
  return {
    props: {
      products,
      map,
    },
  };
};
