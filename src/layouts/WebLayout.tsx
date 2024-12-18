import React from "react";
import type { Metadata } from "next";
import NavBar from "@/components/common/NavBar";
import "@/styles/globals.css";
import MobileNavBar from "@/components/common/MobileNavBar";

interface WebLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

// Function to generate dynamic metadata
export const generateMetadata = ({
  pageTitle,
}: {
  pageTitle?: string;
}): Metadata => ({
  title: pageTitle ? `${pageTitle} - N2 Lettings` : "N2 Lettings",
});

const WebLayout: React.FC<WebLayoutProps> = ({ children }) => {
  return (
    <body className="min-h-screen flex flex-col">
      <header>
        <NavBar />
        <MobileNavBar />
      </header>
      <main className="flex-1">{children}</main>
    </body>
  );
};

export default WebLayout;
