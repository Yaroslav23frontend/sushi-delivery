import { Product } from "../product/types";
export interface ProductsProps {
  products: Array<Product>;
  query: {
    filter: string;
    sort: string;
    per_page: string;
    page: string;
  };
}
export interface ProductsCategoryProps {
  el: "sets" | "rolls" | "nigiri" | "drinks";
}
