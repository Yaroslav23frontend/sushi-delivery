import { Product } from "../product/types";

export interface HeaderProps {
  data: {
    body: string;
    endDate: string;
    startDate: string;
    image: string;
  };
  products: Array<Product>;
}
export interface BgProps {
  url: string;
}
