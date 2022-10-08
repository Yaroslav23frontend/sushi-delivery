import Main from "../components/Main";
import Nav from "../components/nav/Nav";
import Container from "../components/container/Container";
import { sanityClient } from "../lib/sanity/client";
import dynamic from "next/dynamic";
import Comments from "../components/comment/comments/Comments";
import { commentQuery } from "../lib/sanity/commentQuery";
import { CommentsProps } from "../components/comment/comments/types";
import { GetServerSideProps } from "next";
import { mapQuery } from "../lib/sanity/mapQuery";
import { ReviewsPageProps } from "../types/reviewsPage";
const Footer = dynamic(() => import("../components/footer/Footer"), {
  ssr: false,
});
const CommentForm = dynamic(() => import("../components/comment/Comment"), {
  ssr: false,
});
export default function SearchPage({ data, map }: ReviewsPageProps) {
  return (
    <>
      <Nav />
      <Main>
        <Container>
          <CommentForm />
          <Comments data={data} />
        </Container>
      </Main>
      <Footer url={map.url} mainImage={map.mainImage} />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const comments = await sanityClient.fetch(commentQuery);
  const map = await sanityClient.fetch(mapQuery);
  return {
    props: {
      data: comments,
      map,
    },
  };
};
