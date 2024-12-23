"use client";
import React, { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import BreadCrumb from "./Breadcrumb";

interface PageBannerProps {
  imageUrl?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ imageUrl }) => {
  const [randomImageUrl, setRandomImageUrl] = useState("");
  const pathname = usePathname();

  const imageUrls = useMemo(
    () => [
      "/images/banners/banner-image.jpg",
      "/images/banners/banner-image-1.jpg",
      "/images/banners/banner-image-2.jpg",
      "/images/banners/banner-image-3.jpg",
      "/images/banners/banner-image-4.jpeg",
    ],
    []
  );

  useEffect(() => {
    if (!imageUrl) {
      // Randomize image if no prop is provided
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      setRandomImageUrl(imageUrls[randomIndex]);
    }
  }, [imageUrl, imageUrls, pathname]);

  // Use the prop imageUrl if provided; otherwise, use randomImageUrl
  const backgroundImage = imageUrl || randomImageUrl;

  return (
    <div className="relative w-full h-96 py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Banner Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {/* Breadcrumb at the Bottom Left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-10 z-20">
        <BreadCrumb />
      </div>
    </div>
  );
};

export default PageBanner;
