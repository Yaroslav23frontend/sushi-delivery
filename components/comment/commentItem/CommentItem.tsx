import { CommentProps } from "../types";
import { FaUserCircle } from "react-icons/fa";
import Typography from "../../UI/typography/Typography";
export default function CommentItem({
  comment,
  name,
  _createdAt,
  email,
}: CommentProps) {
  return (
    <div className="flex flex-col w-full mx-auto bg-white gap-2 p-2 rounded-lg shadow-lg">
      <Typography variant="h2" tag="p" weight="semibold">
        {comment}
      </Typography>
      <Typography>{email}</Typography>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <FaUserCircle />
          <Typography variant="span" tag="p" weight="semibold">
            {name}
          </Typography>
        </div>
        {_createdAt && (
          <Typography variant="span" tag="p">
            {new Date(`${_createdAt}`).toUTCString()}
          </Typography>
        )}
      </div>
    </div>
  );
}
