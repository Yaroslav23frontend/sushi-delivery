import Typography from "../UI/typography/Typography";
import { ProductsProps } from "../product/types";
import Container from "../container/Container";
import Nav from "../nav/Nav";
import Main from "../Main";
import Search from "../search/Search";
import ScrollToTop from "../scrollTop/ScrollTop";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../footer/Footer"), {
  ssr: false,
});
const Dynamic = dynamic(() => import("./dynamic/Dynamic"), {
  ssr: false,
});
export default function ProductsPage({ products }: ProductsProps) {
  return (
    <>
      <Nav />
      <Container>
        <Main>
          <div className="flex flex-col w-full items-center self-center">
            <Typography
              variant="h1"
              tag="h1"
              weight="bold"
              sx="text-center my-4"
            >
              {products[0].categories[0].title}
            </Typography>
            <Dynamic products={products} />
          </div>
        </Main>
      </Container>
      <Search />
      <ScrollToTop />
      <Footer />
    </>
  );
}
