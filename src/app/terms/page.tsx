import PageBanner from "@/components/common/PageBanner";
import TermsAndConditions from "@/components/Terms/TermsAndConditions";
import WebLayout, { generateMetadata } from "@/layouts/WebLayout";
import React from "react";

export const metadata = generateMetadata({ pageTitle: "Terms and Conditions" });

export default function TermPage() {
  return (
    <WebLayout>
      <PageBanner />
      <TermsAndConditions />
    </WebLayout>
  );
}
