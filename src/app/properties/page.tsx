import PageBanner from "@/components/common/PageBanner";
import PropertyListingsGrid from "@/components/properties/PropertyListingsGrid";
import React from "react";

export default function PropertiesPage() {
  return (
    <>
      <PageBanner />
      <PropertyListingsGrid />
    </>
  );
}
