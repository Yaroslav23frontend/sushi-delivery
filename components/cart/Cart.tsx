import { CartDetails, useShoppingCart } from "use-shopping-cart";
import Container from "../container/Container";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Main from "../Main";
import dynamic from "next/dynamic";
const CartItems = dynamic(() => import("./CartItems"), {
  ssr: false,
});
export default function Cart() {
  return (
    <>
      <Nav />
      <Container>
        <Main>
          <CartItems />
        </Main>
      </Container>
      <Footer />
    </>
  );
}
