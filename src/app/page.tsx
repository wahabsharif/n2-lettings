import FilterBar from "@/components/common/FilterBar";
import Testimonials from "@/components/common/Testimonials";
import { Achievements } from "@/components/home/Achievements";
import Banner from "@/components/home/Banner";
import Listings from "@/components/home/Listings";
import OurAmenities from "@/components/home/OurAmenities";
import OurServices from "@/components/home/OurServices";
import WhoWeAre from "@/components/home/WhoWeAre";
import NewsAndBlogsSlider from "@/components/newsAndBlogs/NewsAndBlogsSlider";

export default function HomePage() {
  return (
    <>
      <Banner />
      <FilterBar />
      <WhoWeAre />
      <Achievements />
      <OurServices />
      <Listings />
      <OurAmenities />
      <Testimonials />
      <NewsAndBlogsSlider />
    </>
  );
}
