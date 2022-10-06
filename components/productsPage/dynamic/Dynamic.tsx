import { CartProvider } from "use-shopping-cart";
import getStripe from "../../../lib/stripe/getStripe";
import { ProductsProps } from "../../product/types";
import Product from "../../product/Product";
import CartButton from "../../cart/cartButton/CartButton";
export default function Dynamic({ products }: ProductsProps) {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <div className="flex flex-col w-full items-center">
        <div className="grid place-items-center w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4 p-2">
          {products.map((el) => {
            return <Product data={el} key={el.id} />;
          })}
        </div>
        <CartButton />
      </div>
    </CartProvider>
  );
}
