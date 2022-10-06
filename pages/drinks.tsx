import { ProductsProps } from "../components/product/types";
import ProductsPage from "../components/productsPage/ProductsPage";
import { sanityClient } from "../lib/sanity/client";
import { merchQueryDrinks } from "../lib/sanity/merchQuery";
import { revalidate } from "../staticProps";
export default function Drinks({ products }: ProductsProps) {
  return <ProductsPage products={products} />;
}
export async function getServerSideProps() {
  const products = await sanityClient.fetch(merchQueryDrinks);
  return {
    props: { products },
  };
}
