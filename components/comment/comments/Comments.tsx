import { CommentsProps } from "./types";
import CommentItem from "../commentItem/CommentItem";
import Typography from "../../UI/typography/Typography";
export default function Comments({ data }: CommentsProps) {
  return (
    <div className="w-full flex flex-col justify-center p-5 space-y-2 rounded-lg shadow-lg">
      <Typography variant="h1" weight="bold">
        Reviews
      </Typography>
      {data.map((el) => {
        return (
          <CommentItem
            key={el._createdAt + el.name}
            email={el.email}
            comment={el.comment}
            name={el.name}
            _createdAt={el._createdAt}
          />
        );
      })}
    </div>
  );
}
