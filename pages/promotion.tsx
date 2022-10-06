import { ProductsProps } from "../components/product/types";
import { sanityClient } from "../lib/sanity/client";
import { promotionProductsQuery } from "../lib/sanity/promotionQuery";
import { revalidate } from "../staticProps";
import { CartProvider } from "use-shopping-cart";
import getStripe from "../lib/stripe/getStripe";
import Nav from "../components/nav/Nav";
import Product from "../components/product/Product";
import Container from "../components/container/Container";
import Typography from "../components/UI/typography/Typography";
import Main from "../components/Main";
import CartButton from "../components/cart/cartButton/CartButton";
import Footer from "../components/footer/Footer";
export default function Promotion({ products }: ProductsProps) {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <>
        <Nav />
        <Container>
          <Main>
            <div className="flex flex-col w-full items-center self-center">
              <Typography variant="h1" tag="h1" weight="bold" sx="text-center">
                Promotion
              </Typography>
              <div className="flex flex-col w-full items-center">
                <div className="grid place-items-center w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4">
                  {products.map((el) => {
                    return <Product data={el} key={el.id} />;
                  })}
                </div>
              </div>
            </div>
          </Main>
        </Container>
        <CartButton />
        <Footer />
      </>
    </CartProvider>
  );
}
export async function getServerSideProps() {
  const products = await sanityClient.fetch(promotionProductsQuery);
  return {
    props: { products },
  };
}
