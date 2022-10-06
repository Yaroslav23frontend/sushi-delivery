import Typography from "../UI/typography/Typography";
import ProductsContainer from "./productsContainer/ProductsContainer";
import { ProductsProps } from "./types";
import { CartProvider } from "use-shopping-cart";
import getStripe from "../../lib/stripe/getStripe";
import CartButton from "../cart/cartButton/CartButton";
export default function Products({ products, promotion }: ProductsProps) {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <div
        id="products"
        className="flex flex-col w-full items-center self-center mt-5"
      >
        <Typography variant="h1" tag="h1" weight="bold" sx="text-center">
          Products
        </Typography>
        <div className="flex flex-col w-full items-center">
          {promotion.length > 0 && (
            <ProductsContainer
              products={promotion}
              title={"Promotion"}
              link={"promotion"}
            />
          )}

          {(Object.keys(products) as Array<keyof typeof products>).map((el) => {
            return (
              <ProductsContainer
                products={products[el]}
                title={products[el][0]["categories"][0]["title"]}
                link={products[el][0]["categories"][0].slug.current}
                key={el}
              />
            );
          })}
        </div>
        <CartButton />
      </div>
    </CartProvider>
  );
}
