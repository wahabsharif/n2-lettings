import FilterBar from "@/components/common/FilterBar";
import { Achievements } from "@/components/home/Achievements";
import Banner from "@/components/home/Banner";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function HomePage() {
  return (
    <>
      <Banner />
      <FilterBar />
      <WhoWeAre />
      <Achievements />
    </>
  );
}
