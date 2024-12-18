import PageBanner from "@/components/common/PageBanner";
import LandlordsTerms from "@/components/Terms/LandlordsTerms";
import WebLayout, { generateMetadata } from "@/layouts/WebLayout";
import React from "react";

export const metadata = generateMetadata({ pageTitle: "Landlords" });

export default function Landlords() {
  return (
    <WebLayout>
      <PageBanner />
      <LandlordsTerms />
    </WebLayout>
  );
}
