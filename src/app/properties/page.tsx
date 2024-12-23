import PageBanner from "@/components/common/PageBanner";
import PropertyListingsGrid from "@/components/properties/PropertyListingsGrid";
import WebLayout, { generateMetadata } from "@/layouts/WebLayout";
import React from "react";
export const metadata = generateMetadata({ pageTitle: "Properties" });

export default function PropertiesPage() {
  return (
    <WebLayout>
      <PageBanner />
      <PropertyListingsGrid />
    </WebLayout>
  );
}
