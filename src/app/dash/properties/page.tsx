import PropertiesList from "@/components/dashboard/Properties/PropertiesList";
import DashLayout, { generateMetadata } from "@/layouts/DashLayout";
import React from "react";

export const metadata = generateMetadata({ pageTitle: "Properties" });

export default function Dashboard() {
  return (
    <DashLayout>
      <div className="flex justify-center items-center">
        <PropertiesList />
      </div>
    </DashLayout>
  );
}
