import Logo from "../logo/Logo";
import Container from "../container/Container";
import Typography from "../UI/typography/Typography";
import ContactUs from "../../pages/api/contactUs";
import ContactForm from "../contactUs/ContactUs";
import GoogleMap from "../googleMap/GoogleMap";

export default function Footer() {
  return (
    <footer className="bg-white w-full mt-5">
      <div className="w-full bg-gray-100">
        <GoogleMap />
        <Container>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-stretch bg-gray-100 gap-5 my-5 p-2">
            <ContactForm />
            <div className="p-5 bg-white rounded-lg w-full">
              <Typography variant="h1" tag="h2" weight="bold">
                Get in tuch
              </Typography>
              <Typography variant="h3">Sushi,Robertson Equipment</Typography>
              <Typography variant="h3">+380991709817</Typography>
              <Typography variant="h3">
                Every day from 10.00 to 22.00
              </Typography>
            </div>
          </div>
        </Container>
        <div className="p-2">
          <hr className="h-2 w-full" />
          <Typography variant="p" tag="p" sx="text-center">
            © 2022 Sushi
          </Typography>
        </div>
      </div>
    </footer>
  );
}
