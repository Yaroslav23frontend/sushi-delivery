import Head from "next/head";
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
const Home = ({ products }: ProductsProps) => {
  console.log(products);
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <div className="flex min-h-screen flex-col items-center ">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
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
  return {
    props: { products: { sets, rolls, nigiri, drinks } },
    revalidate,
  };
}
