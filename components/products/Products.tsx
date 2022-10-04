import Product from "../product/Product";
import Typography from "../UI/typography/Typography";
import ProductsContainer from "./productsContainer/ProductsContainer";
import { ProductsProps } from "./types";

export default function Products({ products }: ProductsProps) {
  return (
    <div className="flex flex-col w-full items-center self-center mt-5">
      <Typography variant="h1" tag="h1" weight="bold" sx="text-center">
        Products
      </Typography>
      <div className="flex flex-col w-full items-center">
        {(Object.keys(products) as Array<keyof typeof products>).map((el) => {
          return <ProductsContainer products={products[el]} key={el} />;
        })}
      </div>
    </div>
  );
}
