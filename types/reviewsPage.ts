import { CommentProps } from "../components/comment/types";
import { MapProps } from "../components/googleMap/types";

export interface ReviewsPageProps {
  data: Array<CommentProps>;
  map: MapProps;
}
