import { CommentProps } from "../components/comment/types";
import { MapProps } from "../components/googleMap/types";
import { Product } from "../components/product/types";
export interface HomeProps {
  products: Array<Product>;
  promotion: {
    body: string;
    endDate: string;
    startDate: string;
    image: string;
  };
  about: {
    image: string;
    body: string;
  };
  comments: Array<CommentProps>;
  query: {
    filter: string;
    sort: string;
    per_page: string;
    page: string;
  };
  map: MapProps;
}
