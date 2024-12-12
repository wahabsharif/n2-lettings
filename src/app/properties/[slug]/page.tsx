import PageBanner from "@/components/common/PageBanner";
import PropertyDetails from "@/components/properties/PropertyDetails";
import PropertyListingsSlider from "@/components/properties/PropertyListingsSlider";
import React from "react";

export default function PropertyDetailsPage() {
  return (
    <>
      <PageBanner />
      <PropertyDetails />
      <PropertyListingsSlider />
    </>
  );
}
