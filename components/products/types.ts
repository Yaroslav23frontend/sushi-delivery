import { Product } from "../product/types";
export interface ProductsProps {
  products: {
    sets: Array<Product>;
    rolls: Array<Product>;
    nigiri: Array<Product>;
    drinks: Array<Product>;
  };
}
export interface ProductsCategoryProps {
  el: "sets" | "rolls" | "nigiri" | "drinks";
}
