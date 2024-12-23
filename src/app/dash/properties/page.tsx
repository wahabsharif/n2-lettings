import DashLayout, { generateMetadata } from "@/layouts/DashLayout";
import React from "react";

export const metadata = generateMetadata({ pageTitle: "Properties" });

export default function Dashboard() {
  return (
    <DashLayout>
      <div className="flex justify-center items-center">
        <h1>Properties</h1>
      </div>
    </DashLayout>
  );
}
