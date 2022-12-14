import Head from "next/head";
import React from "react";
import Nav from "../components/nav/Nav";
import { sanityClient } from "../lib/sanity/client";
import { aboutQuery } from "../lib/sanity/aboutQuery";
import { filterQuery } from "../lib/sanity/filterQuery";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import { discountQuery } from "../lib/sanity/discountQuery";
import { HomeProps } from "../types/homePage";
import Typography from "../components/UI/typography/Typography";
import Logo from "../components/logo/Logo";
import ScrollToTop from "../components/scrollTop/ScrollTop";
import { commentQuery } from "../lib/sanity/commentQuery";
import dynamic from "next/dynamic";
import Filters from "../components/filters/Filters";
import { GetServerSideProps } from "next";
import { mapQuery } from "../lib/sanity/mapQuery";
import Products from "../components/products/Products";
const Footer = dynamic(() => import("../components/footer/Footer"), {
  ssr: false,
});
// const Products = dynamic(() => import("../components/products/Products"), {
//   ssr: false,
// });

const Home = ({ products, promotion, about, query, map }: HomeProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-hidden">
      <Head>
        <title>Sushi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header data={promotion} />
      <Container>
        <Filters filters={query} />
        <Products products={products} query={query} />
        <div className="p-2">
          <div id="about" className="w-full bg-gray-100  rounded-lg my-10">
            <div className="w-full bg-gray-500 p-2 rounded-t-lg">
              <Logo />
            </div>
            <div className="p-5 my-5">
              <Typography variant="h1" tag="h2" weight="bold" sx="my-2">
                About
              </Typography>
              <Typography>{about.body}</Typography>
            </div>
            <div className="w-full flex justify-end bg-gray-500 p-2 rounded-b-lg">
              <Logo />
            </div>
          </div>
        </div>
      </Container>
      <Footer url={map.url} mainImage={map.mainImage} />
      <ScrollToTop />
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const promotion = await sanityClient.fetch(discountQuery);
  const about = await sanityClient.fetch(aboutQuery);
  const filter = context.query.filter;
  const sort = context.query.sort;
  const per_page = context.query.per_page;
  const page = context.query.page;
  const products = await sanityClient.fetch(
    filterQuery(
      filter === "all" ? null : filter,
      sort ? sort : "low",
      per_page ? per_page : "10",
      page ? page : "1"
    )
  );
  const comments = await sanityClient.fetch(commentQuery);
  const map = await sanityClient.fetch(mapQuery);
  return {
    props: {
      promotion,
      about,
      comments,
      products,
      map,
      query: {
        filter: filter ? filter : "all",
        sort: sort ? sort : "low",
        per_page: per_page ? per_page : "10",
        page: page ? page : 1,
      },
    },
  };
};
