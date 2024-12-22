import PageBanner from "@/components/common/PageBanner";
import ContactCards from "@/components/contact/ContactCards";
import GetAQuote from "@/components/contact/GetAQuote";
import GoogleMap from "@/components/contact/GoogleMap";
import WebLayout, { generateMetadata } from "@/layouts/WebLayout";

export const metadata = generateMetadata({ pageTitle: "Contact Us" });

const ContactPage = () => {
  return (
    <WebLayout>
      <PageBanner imageUrl='/images/contact-us.jpg'/>
      <ContactCards />
      <GetAQuote />
      <GoogleMap />
    </WebLayout>
  );
};

export default ContactPage;
