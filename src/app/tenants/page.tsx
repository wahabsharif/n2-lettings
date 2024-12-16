import PageBanner from "@/components/common/PageBanner";
import TenantsFilters from "@/components/tenants/TenantsFilters";
import TenantsListing from "@/components/tenants/TenantsListing";
import React from "react";

const TenantsPage = () => {
  return (
    <>
      <PageBanner />
      <TenantsFilters />
      <TenantsListing />
    </>
  );
};

export default TenantsPage;
