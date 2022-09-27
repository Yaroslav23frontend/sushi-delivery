import { ProductsProps } from "../components/product/types";
import ProductsPage from "../components/productsPage/ProductsPage";
import { sanityClient } from "../lib/sanity/client";
import { merchQuerySets } from "../lib/sanity/merchQuery";
import { revalidate } from "../staticProps";
export default function Sets({ products }: ProductsProps) {
  return <ProductsPage products={products} />;
}
export async function getStaticProps() {
  const products = await sanityClient.fetch(merchQuerySets);
  return {
    props: { products },
    revalidate,
  };
}
