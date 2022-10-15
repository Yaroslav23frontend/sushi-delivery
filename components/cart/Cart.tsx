import { CartProvider } from "use-shopping-cart";
import Container from "../container/Container";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import dynamic from "next/dynamic";
import getStripe from "../../lib/stripe/getStripe";
import { CartProps } from "./types";
const CartItems = dynamic(() => import("./CartItems"), {
  ssr: false,
});
const Footer = dynamic(() => import("../footer/Footer"), {
  ssr: false,
});
export default function Cart({ map }: CartProps) {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <>
        <Nav />
        <Container>
          <Main>
            <CartItems />
          </Main>
        </Container>
        <Footer url={map.url} mainImage={map.mainImage} />
      </>
    </CartProvider>
  );
}
