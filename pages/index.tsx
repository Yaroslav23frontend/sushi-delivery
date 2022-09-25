import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CartProvider } from "use-shopping-cart";
import Nav from "../components/nav/Nav";
import Product from "../components/product/Product";
import { ProductsProps } from "../components/product/types";
import { sanityClient } from "../lib/sanity/client";
import { merchQuery } from "../lib/sanity/merchQuery";
import { revalidate } from "../staticProps";
import getStripe from "../lib/stripe/getStripe";
import CartButton from "../components/cart/cartButton/CartButton";
import Container from "../components/container/Container";
const Home = ({ products }: ProductsProps) => {
  console.log(products);
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <CartButton />
        <Container>
          <div className="grid sm:grid-cols-3 gap-2 mt-4">
            {products.map((el) => {
              return <Product key={el.id} data={el} />;
            })}
          </div>
        </Container>
        <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Home;
export async function getStaticProps() {
  const products = await sanityClient.fetch(merchQuery);
  return {
    props: { products },
    revalidate,
  };
}
