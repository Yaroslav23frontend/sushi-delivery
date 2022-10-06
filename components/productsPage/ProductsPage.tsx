import { CartProvider } from "use-shopping-cart";
import Product from "../product/Product";
import Typography from "../UI/typography/Typography";
import getStripe from "../../lib/stripe/getStripe";
import { ProductsProps } from "../product/types";
import Container from "../container/Container";
import Nav from "../nav/Nav";
import CartButton from "../cart/cartButton/CartButton";
import Main from "../Main";
import Search from "../search/Search";
import ScrollToTop from "../scrollTop/ScrollTop";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../footer/Footer"), {
  ssr: false,
});
export default function ProductsPage({ products }: ProductsProps) {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <>
        <Nav />
        <Container>
          <Main>
            <div className="flex flex-col w-full items-center self-center">
              <Typography
                variant="h1"
                tag="h1"
                weight="bold"
                sx="text-center my-4"
              >
                {products[0].categories[0].title}
              </Typography>
              <div className="flex flex-col w-full items-center">
                <div className="grid place-items-center w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4 p-2">
                  {products.map((el) => {
                    return <Product data={el} key={el.id} />;
                  })}
                </div>
              </div>
            </div>
          </Main>
        </Container>
        <Search />
        <ScrollToTop />
        <CartButton />
        <Footer />
      </>
    </CartProvider>
  );
}
