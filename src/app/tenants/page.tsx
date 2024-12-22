import PageBanner from "@/components/common/PageBanner";
import TenantsFilters from "@/components/tenants/TenantsFilters";
import TenantsListing from "@/components/tenants/TenantsListing";
import React from "react";
import WebLayout, { generateMetadata } from "@/layouts/WebLayout";

export const metadata = generateMetadata({ pageTitle: "Tenants" });

const TenantsPage = () => {
  return (
    <WebLayout>
      <PageBanner imageUrl='/images/banner-image.jpg' />
      <TenantsFilters />
      <TenantsListing />
    </WebLayout>
  );
};

export default TenantsPage;
