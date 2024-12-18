import ProtectedRoute from "@/components/auth/ProtectedRoute";
import type { Metadata } from "next";
import React from "react";
import "@/styles/dash.css";

export const generateMetadata = ({
  pageTitle,
}: {
  pageTitle?: string;
}): Metadata => ({
  title: pageTitle ? `${pageTitle} - N2 Dash` : "N2 Dash",
});

interface DashLayoutProps {
  children: React.ReactNode;
}

const DashLayout: React.FC<DashLayoutProps> = ({ children }) => {
  return (
    <ProtectedRoute>
      <body className="flex h-screen">
        <main className="min-h-screen w-full py-2 overflow-y-auto">
          {children}
        </main>
      </body>
    </ProtectedRoute>
  );
};

export default DashLayout;
