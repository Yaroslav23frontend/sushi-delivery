import { CartEntry, useShoppingCart } from "use-shopping-cart";
import Typography from "../../UI/typography/Typography";
import Button from "../button/Button";
import { CartItemProps } from "./types";

export default function CartItem({ item }: CartItemProps) {
  const { incrementItem, decrementItem, removeItem } = useShoppingCart();
  return (
    <div className="grid grid-col-1 sm:grid-cols-5 w-full place-content-center place-items-center gap-1 my-2">
      <Typography weight="bold">{item.name}</Typography>
      <Typography weight="semibold">{item.price}$</Typography>
      <Typography weight="semibold" sx="flex items-center gap-2">
        <Button func={() => decrementItem(item.sku)}>-</Button>
        {item.quantity}
        <Button func={() => incrementItem(item.sku)}>+</Button>
      </Typography>
      <Typography weight="semibold">{item.value}$</Typography>
      <button onClick={() => removeItem(item.sku)}>remove</button>
    </div>
  );
}
