import { ProductsProps } from "../components/product/types";
import ProductsPage from "../components/productsPage/ProductsPage";
import { sanityClient } from "../lib/sanity/client";
import { merchQueryNigiri } from "../lib/sanity/merchQuery";
export default function Nigiri({ products }: ProductsProps) {
  return <ProductsPage products={products} />;
}
export async function getServerSideProps() {
  const products = await sanityClient.fetch(merchQueryNigiri);
  return {
    props: { products },
  };
}
