import Typography from "../UI/typography/Typography";
import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./cartItem/CartItem";
import Link from "next/link";
import { fetchPostJSON } from "../../utils/apiHelpers";
import { SyntheticEvent } from "react";
export default function CartItems() {
  const { cartDetails, redirectToCheckout } = useShoppingCart();
  const handleCheckout = async (event: SyntheticEvent) => {
    event.preventDefault();
    //send the cart data to our serverless API
    const response = await fetchPostJSON(
      "/api/checkout_sessions/cart",
      cartDetails
    );

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }
    console.log(response);
    //if nothing went wrong, sends user to Stripe checkout
    redirectToCheckout({ sessionId: response.id });
  };
  return (
    <>
      {Object.values(cartDetails).length !== 0 && (
        <Typography variant="h1" tag="h1" weight="bold" sx="my-4 text-center">
          Cart
        </Typography>
      )}

      <div className="my-4">
        {Object.values(cartDetails).map((el) => {
          return <CartItem item={el} key={el.sku} />;
        })}
        {Object.values(cartDetails).length === 0 && (
          <div className="absolute border p-5 border-gray-500 rounded-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 justify-center items-center">
            <Typography variant="h1" tag="p" weight="bold">
              Cart is empty
            </Typography>
            <div className="inline-block border rounded-lg cursor-pointer">
              <Link href="/">
                <Typography sx="cursor-pointer px-2 py-1" tag="span">
                  Home
                </Typography>
              </Link>
            </div>
          </div>
        )}
      </div>

      {Object.values(cartDetails).length !== 0 && (
        <button onClick={handleCheckout}>Checkout</button>
      )}
    </>
  );
}
