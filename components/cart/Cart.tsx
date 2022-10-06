import { CartDetails, CartProvider, useShoppingCart } from "use-shopping-cart";
import Container from "../container/Container";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Main from "../Main";
import dynamic from "next/dynamic";
import getStripe from "../../lib/stripe/getStripe";
const CartItems = dynamic(() => import("./CartItems"), {
  ssr: false,
});
export default function Cart() {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <>
        <Nav />
        <Container>
          <Main>
            <CartItems />
          </Main>
        </Container>
        <Footer />
      </>
    </CartProvider>
  );
}
