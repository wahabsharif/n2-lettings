import PageBanner from "@/components/common/PageBanner";
import ComparisonTable from "@/components/guaranteed-rent/ComparisonTable";
import ContactLettings from "@/components/guaranteed-rent/ContactLettings";
import RentSchema from "@/components/guaranteed-rent/RentSchem";
import SiteBack from "@/components/guaranteed-rent/SiteBack";
import React from "react";

const RentGuaranteed = () => {
  return (
    <>
      <PageBanner />
      <SiteBack />
      <RentSchema />
      <ComparisonTable />
      <ContactLettings />
    </>
  );
};

export default RentGuaranteed;
