import PageBanner from "@/components/common/PageBanner";
import ComparisonTable from "@/components/guaranteed-rent/ComparisonTable";
import ContactLettings from "@/components/guaranteed-rent/ContactLettings";
import RentSchema from "@/components/guaranteed-rent/RentSchem";
import SiteBack from "@/components/guaranteed-rent/SiteBack";
import WebLayout, { generateMetadata } from "@/layouts/WebLayout";
import React from "react";

export const metadata = generateMetadata({ pageTitle: "Guaranteed Rent" });

const RentGuaranteed = () => {
  return (
    <WebLayout>
      <PageBanner />
      <SiteBack />
      <RentSchema />
      <ComparisonTable />
      <ContactLettings />
    </WebLayout>
  );
};

export default RentGuaranteed;
