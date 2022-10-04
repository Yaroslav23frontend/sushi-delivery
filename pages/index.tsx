import Head from "next/head";
import React from "react";
import { CartProvider } from "use-shopping-cart";
import Nav from "../components/nav/Nav";
import { ProductsProps } from "../components/products/types";
import { sanityClient } from "../lib/sanity/client";
import {
  merchQueryMainDrinks,
  merchQueryMainNigiri,
  merchQueryMainRolls,
  merchQueryMainSets,
} from "../lib/sanity/merchQuery";
import { revalidate } from "../staticProps";
import getStripe from "../lib/stripe/getStripe";
import CartButton from "../components/cart/cartButton/CartButton";
import Container from "../components/container/Container";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";
import Cart from "../components/cart/Cart";
import Header from "../components/header/Header";
import {
  promotionProductsQuery,
  promotionQuery,
} from "../lib/sanity/promotionQuery";
import { HomeProps } from "../types/homePage";
const Home = ({ products, promotion, promotionProducts }: HomeProps) => {
  console.log(promotion);
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <div className="flex min-h-screen flex-col items-center overflow-hidden">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <Header data={promotion} products={promotionProducts} />
        <CartButton />
        <Container>
          <Products products={products} />
        </Container>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Home;
export async function getStaticProps() {
  const sets = await sanityClient.fetch(merchQueryMainSets);
  const rolls = await sanityClient.fetch(merchQueryMainRolls);
  const nigiri = await sanityClient.fetch(merchQueryMainNigiri);
  const drinks = await sanityClient.fetch(merchQueryMainDrinks);
  const promotion = await sanityClient.fetch(promotionQuery);
  const promotionProducts = await sanityClient.fetch(promotionProductsQuery);
  return {
    props: {
      products: { sets, rolls, nigiri, drinks },
      promotion,
      promotionProducts,
    },
    revalidate,
  };
}
