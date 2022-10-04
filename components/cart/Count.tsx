import { useShoppingCart } from "use-shopping-cart";
import Typography from "../UI/typography/Typography";
export default function Count() {
  const { cartCount } = useShoppingCart();
  return (
    <>
      {cartCount > 0 && (
        <Typography
          color="white"
          variant="span"
          sx="absolute flex justify-center items-center top-1/2 left-1/2 -translate-y-5 -translate-x-1/2 bg-orange-500 rounded-full w-5 h-5"
        >
          {cartCount}
        </Typography>
      )}
    </>
  );
}
