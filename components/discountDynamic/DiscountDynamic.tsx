import { CartProvider } from "use-shopping-cart";
import getStripe from "../../lib/stripe/getStripe";
import { ProductsProps } from "../product/types";
import Product from "../product/Product";
import Typography from "../UI/typography/Typography";
import Search from "../filters/search/Search";
import CartButton from "../cart/cartButton/CartButton";
export default function DiscountDynamic({ products }: ProductsProps) {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <>
        <div className="flex flex-col w-full items-center self-center p-2">
          <Search />
          <Typography variant="h1" tag="h1" weight="bold" sx="text-center">
            Promotion
          </Typography>
          <div className="flex flex-col w-full items-center">
            <div className="grid place-items-center w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4">
              {products.map((el) => {
                return <Product data={el} key={el.id} />;
              })}
              <CartButton />
            </div>
          </div>
        </div>
      </>
    </CartProvider>
  );
}
