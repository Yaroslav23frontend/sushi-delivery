import Main from "../components/Main";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Container from "../components/container/Container";
import { GetServerSideProps } from "next";
import { sanityClient } from "../lib/sanity/client";
import { ProductsProps } from "../components/product/types";
import { CartProvider } from "use-shopping-cart";
import getStripe from "../lib/stripe/getStripe";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { searchQuery } from "../lib/sanity/searchQuery";
import Typography from "../components/UI/typography/Typography";
import Product from "../components/product/Product";
import CartButton from "../components/cart/cartButton/CartButton";
import Search from "../components/search/Search";

export default function SearchPage({ products }: ProductsProps) {
  const router = useRouter();
  const [searches, setSerches] = useState<any[string]>([]);
  useEffect(() => {
    const searches: any[string] = new Set(
      JSON.parse(localStorage.getItem("searches")!)
    );
    if (searches) {
      const temp = new Set(searches);
      setSerches(Array.from(temp));
    }
  }, []);
  function deleteSearchItem(item?: string) {
    const temp = searches.filter((el: string) => el !== item);
    setSerches(temp);
    localStorage.setItem("searches", JSON.stringify(temp));
  }
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <>
        <Nav />
        <Main>
          <Container>
            <div className="flex flex-col items-center rounded-lg p-5 w-full h-full">
              <Typography variant="h1" weight="bold" tag="h1" sx="mt-2">
                {router.query.q !== undefined ? (
                  <>
                    <Typography
                      variant="h1"
                      tag="span"
                      weight="bold"
                      color="gray"
                    >
                      Result for
                    </Typography>{" "}
                    {router.query.q}
                  </>
                ) : (
                  "Recent searches"
                )}
              </Typography>
              {router.query.q && products.length === 0 && (
                <div className="max-w-xs mt-12 text-gray-600 border-gray-600 border p-2 rounded-lg">
                  <Typography variant="p" tag="p">
                    Make sure all words are spelled correctly.
                  </Typography>
                  <Typography variant="p" tag="p">
                    Try different keywords.
                  </Typography>
                  <Typography variant="p" tag="p">
                    Try more general keywords.
                  </Typography>
                </div>
              )}
              <div className="grid place-items-center w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4 p-2">
                {products.map((el) => (
                  <Product data={el} key={el.id} />
                ))}
              </div>
            </div>
          </Container>
          <Search />
          <CartButton />
        </Main>
        <Footer />
      </>
    </CartProvider>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
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
