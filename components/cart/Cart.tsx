import { CartDetails, CartProvider, useShoppingCart } from "use-shopping-cart";
import Container from "../container/Container";
import Typography from "../UI/typography/Typography";
import CartItem from "./cartItem/CartItem";
import { useState, useEffect } from "react";
import { checkout } from "../../checkout";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Main from "../Main";
import getStripe from "../../lib/stripe/getStripe";
export default function Cart() {
  const { cartDetails } = useShoppingCart();
  const [cart, setCart] = useState<CartDetails>({});
  useEffect(() => {
    setCart(cartDetails);
  }, [cartDetails]);

  return (
    <>
      <Nav />
      <Container>
        <Main>
          <Typography variant="h1" tag="h1" weight="bold" sx="my-4 text-center">
            Cart
          </Typography>
          <div className="my-4">
            {Object.values(cart).map((el) => {
              return <CartItem item={el} key={el.sku} />;
            })}
          </div>

          <button onClick={() => checkout({ lineItems: Object.values(cart) })}>
            Checkout
          </button>
        </Main>
      </Container>
      <Footer />
    </>
  );
}
