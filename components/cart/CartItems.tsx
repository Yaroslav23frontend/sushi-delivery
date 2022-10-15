import Typography from "../UI/typography/Typography";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import CartItem from "./cartItem/CartItem";
import Link from "next/link";
import { fetchPostJSON } from "../../utils/apiHelpers";
import { SyntheticEvent, useState } from "react";
export default function CartItems() {
  const { cartDetails, redirectToCheckout, totalPrice, clearCart, cartCount } =
    useShoppingCart();
  const [loading, setLoading] = useState(false);
  const handleCheckout = async (event: SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    //send the cart data to our serverless API
    const response = await fetchPostJSON(
      "/api/checkout_sessions/cart",
      cartDetails
    );
    if (response.statusCode === 500) {
      setLoading(false);
      console.error(response.message);
      return;
    }
    //if nothing went wrong, sends user to Stripe checkout
    redirectToCheckout({ sessionId: response.id });
  };
  return (
    <div className="w-full flex justify-center flex-col">
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
        <div className="hidden sm:grid sm:grid-cols-5 w-full  place-items-center mb-2">
          <Typography weight="bold">
            {Object.values(cartDetails).length}
          </Typography>
          <div></div>
          <Typography weight="bold">{cartCount}</Typography>
          <Typography weight="bold" sx="text-center">
            {formatCurrencyString({ value: totalPrice, currency: "USD" })}
          </Typography>
          <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
      )}
      {Object.values(cartDetails).length !== 0 && (
        <div className="flex flex-col max-w-xs items-center self-center p-2 rounded-lg justify-center mt-2 border border-gray-500">
          <Typography weight="bold" sx="text-center">
            {formatCurrencyString({ value: totalPrice, currency: "USD" })}
          </Typography>

          <button onClick={handleCheckout}>
            {loading ? (
              <>
                <svg
                  role="status"
                  className="inline mr-3 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </>
            ) : (
              "Checkout"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
