import Link from "next/link";
import Typography from "../../UI/typography/Typography";
import { PropsNav } from "../types";
export default function NavItem({ link, title }: PropsNav) {
  return (
    <div className="cursor-pointer">
      <Link href={link}>
        <Typography variant="p" tag="p" weight="semibold" color="white">
          {title}
        </Typography>
      </Link>
    </div>
  );
}
