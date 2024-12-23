import DashLayout, { generateMetadata } from "@/layouts/DashLayout";
import React from "react";

export const metadata = generateMetadata({ pageTitle: "" });

export default function Dashboard() {
  return (
    <DashLayout>
      <div className="flex justify-center items-center">
        <h1>Dashboard</h1>
      </div>
    </DashLayout>
  );
}
