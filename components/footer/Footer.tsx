import Logo from "../logo/Logo";
import Container from "../container/Container";
import Typography from "../UI/typography/Typography";

export default function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="flex flex-col items-center justify-center w-full p-2">
          <hr className="h-2 w-full" />
          <Typography variant="p" tag="p" sx="text-center">
            © 2022 Sushi
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
