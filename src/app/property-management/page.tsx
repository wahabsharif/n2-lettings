import PageBanner from "@/components/common/PageBanner";
import PropertyManagementContact from "@/components/property-management/ContactPropertyManagement";
import PropertyContent from "@/components/property-management/PropertyContent";
import PropertyTerms from "@/components/property-management/RulesRegulation";
import React from "react";

const ProjectManagement = () => {
  return (
    <>
      <PageBanner />
      <PropertyContent />
      <PropertyTerms />
      <PropertyManagementContact />
    </>
  );
};

export default ProjectManagement;
