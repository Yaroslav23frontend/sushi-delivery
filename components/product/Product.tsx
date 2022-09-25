import { ProductProps } from "./types";
import Image from "next/image";
import Typography from "../UI/typography/Typography";
import { BsCartFill } from "react-icons/bs";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { urlFor } from "../../lib/sanity/client";
export default function Product({ data }: ProductProps) {
  const { addItem } = useShoppingCart();
  console.log(data.price);
  return (
    <div className="flex flex-col justify-between rounded-lg w-full sm:max-w-xs shadow-lg">
      <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full sm:max-w-xs">
          <img src={`${urlFor(data.image).width(320)}`} alt={data.name} />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <Typography variant="p" weight="semibold" tag="p">
          {data.name}
        </Typography>
        <Typography variant="p" tag="p">
          {data.description}
        </Typography>
      </div>
      <div className="flex justify-between p-2">
        <Typography variant="p" tag="p">
          {parseFloat(data.price).toFixed(2) + "$"}
        </Typography>
        <button
          onClick={() => {
            addItem({ ...data, sku: data.id }, 1);
          }}
        >
          <BsCartFill size={22} />
        </button>
      </div>
    </div>
  );
}
