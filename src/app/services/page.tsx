import ServicesContent from "@/components/services/ServicesContent";
import React from "react";
import WebLayout, { generateMetadata } from "@/layouts/WebLayout";

export const metadata = generateMetadata({ pageTitle: "Services" });

const Services = () => {
  return (
    <WebLayout>
      <ServicesContent />
    </WebLayout>
  );
};

export default Services;
