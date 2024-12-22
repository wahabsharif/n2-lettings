import PageBanner from "@/components/common/PageBanner";
import PropertyManagementContact from "@/components/property-management/ContactPropertyManagement";
import PropertyContent from "@/components/property-management/PropertyContent";
import PropertyTerms from "@/components/property-management/RulesRegulation";
import WebLayout, { generateMetadata } from "@/layouts/WebLayout";
import React from "react";

export const metadata = generateMetadata({ pageTitle: "Property Management" });

const PropertyManagement = () => {
  return (
    <WebLayout>
      <PageBanner imageUrl='/images/banner-image-5.jpeg'/>
      <PropertyContent />
      <PropertyTerms />
      <PropertyManagementContact />
    </WebLayout>
  );
};

export default PropertyManagement;
