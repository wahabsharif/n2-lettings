import PageBanner from "@/components/common/PageBanner";
import CoveredPlan from "@/components/smart-care-plan/coveredPlanData";
import PackagePlan from "@/components/smart-care-plan/PackagePlan";
import SmartCareContact from "@/components/smart-care-plan/SmartCareContact";
import WebLayout, { generateMetadata } from "@/layouts/WebLayout";
import React from "react";

export const metadata = generateMetadata({ pageTitle: "Smart Care Plan" });

const SmartCarePlan = () => {
  return (
    <WebLayout>
      <PageBanner imageUrl='/images/banner-image-2.jpg' />
      <PackagePlan />
      <CoveredPlan />
      <SmartCareContact />
    </WebLayout>
  );
};

export default SmartCarePlan;
