import { MapProps } from "../components/googleMap/types";
import { Product } from "../components/product/types";

export interface SearchPageProps {
  products: Array<Product>;
  map: MapProps;
}
