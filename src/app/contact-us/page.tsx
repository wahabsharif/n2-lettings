import PageBanner from "@/components/common/PageBanner";
import ContactCards from "@/components/contact/ContactCards";
import GetAQuote from "@/components/contact/GetAQuote";
import GoogleMap from "@/components/contact/GoogleMap";

const Page = () => {
  return (
    <>
      <PageBanner />
      <ContactCards />
      <GetAQuote />
      <GoogleMap />
    </>
  );
};

export default Page;
