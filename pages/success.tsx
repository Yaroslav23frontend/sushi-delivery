import Nav from "../components/nav/Nav";
import Container from "../components/container/Container";
import Main from "../components/Main";
import dynamic from "next/dynamic";
import Typography from "../components/UI/typography/Typography";
import Link from "next/link";
import { useEffect } from "react";
const Footer = dynamic(() => import("../components/footer/Footer"), {
  ssr: false,
});
export default function Success() {
  useEffect(() => {
    localStorage.removeItem("cart-values");
  }, []);
  return (
    <>
      <Nav />
      <Main>
        <Container>
          <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Typography variant="h1" tag="h1">
              Thank you for your order!
            </Typography>
            <Link href="/">
              <Typography
                variant="h3"
                sx="border border-gray-500 py-1 px-2 rounded-lg mt-4 hover:bg-black hover:text-white cursor-pointer"
              >
                Home
              </Typography>
            </Link>
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
