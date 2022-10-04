import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { useShoppingCart } from "use-shopping-cart";
import Typography from "../../UI/typography/Typography";
export default function CartButton() {
  const { cartCount } = useShoppingCart();
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(cartCount);
  }, [cartCount]);
  return (
    <Link href="/cart">
      <div className="z-10 fixed bottom-2 right-2 rounded-full p-4 bg-gray-600 hover:bg-gray-800 active:bg-gray-900 text-white cursor-pointer">
        {count > 0 && (
          <Typography
            color="white"
            variant="span"
            sx="absolute flex justify-center items-center top-1/2 left-1/2 -translate-y-5 -translate-x-1/2 bg-orange-500 rounded-full w-5 h-5"
          >
            {count}
          </Typography>
        )}

        <BsCartFill size={30} />
      </div>
    </Link>
  );
}
