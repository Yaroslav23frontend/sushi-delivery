import { Product } from "../components/product/types";
export interface HomeProps {
  products: {
    sets: Array<Product>;
    rolls: Array<Product>;
    nigiri: Array<Product>;
    drinks: Array<Product>;
  };
  promotion: {
    body: string;
    endDate: string;
    startDate: string;
    image: string;
  };
}
