import PageBanner from "@/components/common/PageBanner";
import PropertyDetails from "@/components/properties/PropertyDetails";
import PropertyListingsSlider from "@/components/properties/PropertyListingsSlider";
import WebLayout from "@/layouts/WebLayout";
import React from "react";

export default function PropertyDetailsPage() {
  return (
    <WebLayout>
      <PageBanner />
      <PropertyDetails />
      <PropertyListingsSlider />
    </WebLayout>
  );
}
