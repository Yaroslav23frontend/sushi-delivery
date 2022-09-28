import Link from "next/link";
import Typography from "../UI/typography/Typography";
import { logo } from "./logo.config";
export default function Logo() {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center cursor-pointer">
        {logo.icon}
        <Typography variant="h2" tag="p" weight="semibold" color="white">
          {logo.text}
        </Typography>
      </div>
    </Link>
  );
}
