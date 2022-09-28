import Typography from "../../UI/typography/Typography";
import { ButtonProps } from "./types";

export default function Button({ children, func }: ButtonProps) {
  return (
    <button
      onClick={func}
      className="w-5 h-5 rounded-full flex justify-center items-center bg-black"
    >
      <Typography color="white">{children}</Typography>
    </button>
  );
}
