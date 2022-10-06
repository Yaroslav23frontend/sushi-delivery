import Head from "next/head";
import React from "react";
import { CartProvider } from "use-shopping-cart";
import Nav from "../components/nav/Nav";
import { sanityClient } from "../lib/sanity/client";
import {
  merchQueryMainDrinks,
  merchQueryMainNigiri,
  merchQueryMainRolls,
  merchQueryMainSets,
} from "../lib/sanity/merchQuery";
import { aboutQuery } from "../lib/sanity/aboutQuery";
import { revalidate } from "../staticProps";
import getStripe from "../lib/stripe/getStripe";
import CartButton from "../components/cart/cartButton/CartButton";
import Container from "../components/container/Container";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import {
  promotionProductsQuery,
  promotionQuery,
} from "../lib/sanity/promotionQuery";
import { HomeProps } from "../types/homePage";
import Typography from "../components/UI/typography/Typography";
import Logo from "../components/logo/Logo";
import ScrollToTop from "../components/scrollTop/ScrollTop";
import CommentForm from "../components/comment/Comment";
import { commentQuery } from "../lib/sanity/commentQuery";
import Comments from "../components/comment/comments/Comments";
import Search from "../components/search/Search";
const Home = ({
  products,
  promotion,
  promotionProducts,
  about,
  comments,
}: HomeProps) => {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <div className="flex min-h-screen flex-col items-center overflow-hidden">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <Header data={promotion} products={promotionProducts} />

        <Container>
          <Products products={products} />
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
        <CartButton />
        <ScrollToTop />
      </div>
    </CartProvider>
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
  const promotionProducts = await sanityClient.fetch(promotionProductsQuery);
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
