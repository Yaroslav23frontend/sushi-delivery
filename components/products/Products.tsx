import { ProductsProps } from "./types";
import { CartProvider } from "use-shopping-cart";
import getStripe from "../../lib/stripe/getStripe";
import CartButton from "../cart/cartButton/CartButton";
import Product from "../product/Product";
import { useRouter } from "next/router";
import Typography from "../UI/typography/Typography";
export default function Products({ products, query }: ProductsProps) {
  function pages() {
    const temp = [];
    for (
      let i = 0;
      i < Math.ceil(products[0]?.total / Number(query.per_page));
      i++
    ) {
      temp.push(i);
    }
    return temp;
  }
  const router = useRouter();

  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="USD">
      <>
        <div className="grid place-items-center w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4 p-2">
          {products.map((el) => {
            return <Product data={el} key={el.id} />;
          })}
          <CartButton />
        </div>
        <div className="flex gap-2 mt-2">
          {pages().map((el) => {
            return (
              <button
                key={el}
                onClick={() =>
                  router.push(
                    `/?${query.filter && `filter=${query.filter}`}${
                      query.sort && `&sort=${query.sort}`
                    }${
                      query.per_page &&
                      `&per_page=${query.per_page}&page=${el + 1}`
                    }`
                  )
                }
              >
                <Typography
                  variant="h3"
                  weight={el + 1 === Number(query.page) ? "bold" : "normal"}
                >
                  {el + 1}
                </Typography>
              </button>
            );
          })}
        </div>
      </>
    </CartProvider>
  );
}
