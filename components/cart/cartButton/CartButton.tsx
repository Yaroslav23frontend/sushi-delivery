import Link from "next/link";
import { BsCartFill } from "react-icons/bs";
import dynamic from "next/dynamic";
const Count = dynamic(() => import("../Count"), {
  ssr: false,
});
export default function CartButton() {
  return (
    <Link href="/cart">
      <div className="z-10 fixed bottom-2 right-2 rounded-full p-4 bg-gray-600 hover:bg-gray-800 active:bg-gray-900 text-white cursor-pointer">
        <Count />
        <BsCartFill size={30} />
      </div>
    </Link>
  );
}
