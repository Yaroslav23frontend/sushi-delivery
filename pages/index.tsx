import Head from "next/head";
import React from "react";
import Nav from "../components/nav/Nav";
import { sanityClient } from "../lib/sanity/client";
import {
  merchQueryMainDrinks,
  merchQueryMainNigiri,
  merchQueryMainRolls,
  merchQueryMainSets,
} from "../lib/sanity/merchQuery";
import { aboutQuery } from "../lib/sanity/aboutQuery";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import {
  promotionProductsQuery,
  promotionQuery,
} from "../lib/sanity/promotionQuery";
import { HomeProps } from "../types/homePage";
import Typography from "../components/UI/typography/Typography";
import Logo from "../components/logo/Logo";
import ScrollToTop from "../components/scrollTop/ScrollTop";
import { commentQuery } from "../lib/sanity/commentQuery";
import dynamic from "next/dynamic";
const Comments = dynamic(
  () => import("../components/comment/comments/Comments"),
  {
    ssr: false,
  }
);
const CommentForm = dynamic(() => import("../components/comment/Comment"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/footer/Footer"), {
  ssr: false,
});
const Products = dynamic(() => import("../components/products/Products"), {
  ssr: false,
});
const Search = dynamic(() => import("../components/search/Search"), {
  ssr: false,
});
const Home = ({
  products,
  promotion,
  promotionProducts,
  about,
  comments,
}: HomeProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-hidden">
      <Head>
        <title>Sushi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header data={promotion} />
      <Container>
        <Products products={products} promotion={promotionProducts} />
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
        <CommentForm />
        <Search />
        <Comments data={comments} />
      </Container>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
export async function getServerSideProps() {
  const sets = await sanityClient.fetch(merchQueryMainSets);
  const rolls = await sanityClient.fetch(merchQueryMainRolls);
  const nigiri = await sanityClient.fetch(merchQueryMainNigiri);
  const drinks = await sanityClient.fetch(merchQueryMainDrinks);
  const promotion = await sanityClient.fetch(promotionQuery);
  const about = await sanityClient.fetch(aboutQuery);
  const prom =
    new Date().getTime() < new Date(promotion.endDate).getTime() &&
    new Date().getTime() >= new Date(promotion.startDate).getTime();
  const promotionProducts =
    (prom && (await sanityClient.fetch(promotionProductsQuery))) || [];
  const comments = await sanityClient.fetch(commentQuery);
  return {
    props: {
      products: { sets, rolls, nigiri, drinks },
      promotion,
      promotionProducts,
      about,
      comments,
    },
  };
}
