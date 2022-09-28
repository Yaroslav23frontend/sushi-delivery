import { CartProvider } from "use-shopping-cart";
import Cart from "../components/cart/Cart";
import getStripe from "../lib/stripe/getStripe";

export default function CartPage() {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <Cart />
    </CartProvider>
  );
}
