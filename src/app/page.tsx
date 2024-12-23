import FilterBar from "@/components/common/FilterBar";
// import Testimonials from "@/components/common/Testimonials";
import { Achievements } from "@/components/home/Achievements";
import Banner from "@/components/home/Banner";
import PropertyListingsSlider from "@/components/properties/PropertyListingsSlider";
import OurServices from "@/components/home/OurServices";
import WhoWeAre from "@/components/home/WhoWeAre";
import WebLayout, { generateMetadata } from "@/layouts/WebLayout";

export const metadata = generateMetadata({ pageTitle: "" });

export default function HomePage() {
  return (
    <WebLayout>
      <Banner />
      <WhoWeAre />
      <Achievements />
      <OurServices />
      <FilterBar />
      <PropertyListingsSlider />
      {/* <Testimonials /> */}
    </WebLayout>
  );
}
