import PageBanner from "@/components/common/PageBanner";
import CoveredPlan from "@/components/smart-care-plan/coveredPlanData";
import PackagePlan from "@/components/smart-care-plan/PackagePlan";
import SmartCareContact from "@/components/smart-care-plan/SmartCareContact";
import React from "react";

const SmartCarePlan = () => {
  return (
    <>
      <PageBanner />
      <PackagePlan />
      <CoveredPlan />
      <SmartCareContact />
    </>
  );
};

export default SmartCarePlan;
