import { ProductProps } from "./types";
import Typography from "../UI/typography/Typography";
import { BsCartFill } from "react-icons/bs";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { urlFor } from "../../lib/sanity/client";
import { useState, useEffect } from "react";
export default function Product({ data }: ProductProps) {
  const { addItem, cartDetails } = useShoppingCart();
  const [quantity, setQuantity] = useState(0);
  const promotion =
    data?.promotion !== undefined
      ? data.promotion.reduce((acc, el) => acc + el.promotion, 0)
      : 0;
  console.log(promotion);
  useEffect(() => {
    const temp = Object.values(cartDetails).filter(
      (el) => el.name === data.name
    );
    if (temp[0]?.quantity !== quantity && temp.length !== 0) {
      setQuantity(temp[0].quantity);
    }
  }, [cartDetails]);
  return (
    <div className="relative flex flex-col h-full justify-between rounded-lg w-full max-w-md shadow-lg">
      <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-md">
          <img
            className="w-full"
            src={`${urlFor(data.image).width(320)}`}
            alt={data.name}
          />
        </div>
      </div>
      <div className="absolute top-1 right-1 flex justify-center items-center gap-2">
        {quantity > 0 && (
          <Typography
            color="white"
            variant="span"
            weight="semibold"
            sx="flex justify-center items-center w-10 h-10 p-2 bg-orange-500 rounded-full"
          >
            {quantity}
          </Typography>
        )}
        {promotion > 0 && (
          <Typography
            color="white"
            variant="span"
            weight="semibold"
            sx="flex justify-center items-center w-10 h-10 p-2 bg-red-500 rounded-full"
          >
            -{promotion}%
          </Typography>
        )}
      </div>

      <div className="flex w-full flex-col gap-2 p-2">
        <Typography variant="p" weight="semibold" tag="p">
          {data.name}
        </Typography>
        <Typography variant="p" tag="p">
          {data.description}
        </Typography>
      </div>
      <div className="flex justify-between p-2 ">
        <div className="flex gap-2">
          <Typography
            variant="p"
            tag="p"
            sx={promotion > 0 ? `line-through` : ""}
            weight="bold"
          >
            {formatCurrencyString({
              value: data.price,
              currency: "USD",
            })}
          </Typography>
          {promotion > 0 && (
            <Typography
              variant="p"
              tag="span"
              weight="bold"
              color="red"
              sx="text-red-600"
            >
              {formatCurrencyString({
                value: data.price - (data.price / 100) * promotion,
                currency: "USD",
              })}
            </Typography>
          )}
        </div>

        <button
          onClick={() => {
            const item = Object.assign({}, data);
            delete item.categories;
            item.price = data.price - (data.price / 100) * promotion;
            console.log(item);
            addItem({
              ...item,
              sku: item.id,
            });
          }}
        >
          <BsCartFill color="black" size={22} />
        </button>
      </div>
    </div>
  );
}
