import { ProductsProps } from "../components/product/types";
import ProductsPage from "../components/productsPage/ProductsPage";
import { sanityClient } from "../lib/sanity/client";
import { merchQueryRolls, merchQuerySets } from "../lib/sanity/merchQuery";
import { revalidate } from "../staticProps";
export default function Rolls({ products }: ProductsProps) {
  return <ProductsPage products={products} />;
}
export async function getServerSideProps() {
  const products = await sanityClient.fetch(merchQueryRolls);
  return {
    props: { products },
  };
}
