import { CartProvider } from "use-shopping-cart";
import getStripe from "../../lib/stripe/getStripe";
import { ProductsProps } from "../product/types";
import Product from "../product/Product";
import Typography from "../UI/typography/Typography";
import CartButton from "../cart/cartButton/CartButton";
import Search from "../filters/search/Search";
import { useRouter } from "next/router";
export default function SearchDinamic({ products }: ProductsProps) {
  const router = useRouter();
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <div className="flex flex-col items-center rounded-lg p-5 w-full h-full">
        <Search />
        <Typography variant="h1" weight="bold" tag="h1" sx="mt-2">
          {router.query.q !== undefined ? (
            <>
              <Typography variant="h1" tag="span" weight="bold" color="gray">
                Result for
              </Typography>{" "}
              {router.query.q}
            </>
          ) : (
            "Recent searches"
          )}
        </Typography>
        {router.query.q && products.length === 0 && (
          <div className="max-w-xs mt-12 text-gray-600 border-gray-600 border p-2 rounded-lg">
            <Typography variant="p" tag="p">
              Make sure all words are spelled correctly.
            </Typography>
            <Typography variant="p" tag="p">
              Try different keywords.
            </Typography>
            <Typography variant="p" tag="p">
              Try more general keywords.
            </Typography>
          </div>
        )}
        <div className="grid place-items-center w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4 p-2">
          {products.map((el) => (
            <Product data={el} key={el.id} />
          ))}
        </div>
        <CartButton />
      </div>
    </CartProvider>
  );
}
