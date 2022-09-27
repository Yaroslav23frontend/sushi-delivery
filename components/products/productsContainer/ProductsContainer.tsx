import Link from "next/link";
import Product from "../../product/Product";
import { ProductsProps } from "../../product/types";
import Typography from "../../UI/typography/Typography";
export default function ProductsContainer({ products }: ProductsProps) {
  return (
    <div className="w-full p-2 mt-10">
      <div className="flex justify-between items-center">
        <Typography variant="h2" tag="h2" weight="bold" sx="text-center">
          {products[0].categories[0].title}
        </Typography>
        <Link href={products[0].categories[0].slug.current}>
          <Typography
            variant="p"
            tag="p"
            sx="border border-gray-500 rounded-lg px-2 py-1 hover:bg-black hover:text-white cursor-pointer"
          >
            All products
          </Typography>
        </Link>
      </div>

      <div className="grid place-items-center w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-4">
        {products.map((el) => {
          return <Product data={el} key={el.id} />;
        })}
      </div>
    </div>
  );
}
