// components/PageBanner.tsx
import React from "react";
import BreadCrumb from "./Breadcrumb";

interface PageBannerProps {
  imageUrl: string; // Prop to pass the banner image URL
}

const PageBanner: React.FC<PageBannerProps> = ({ imageUrl }) => {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-[28%] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Banner Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center dark:opacity-50 opacity-80"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      {/* Breadcrumb at the Bottom Left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-10 z-20">
        <BreadCrumb />
      </div>
    </div>
  );
};

export default PageBanner;
