"use client";
import React from "react";
import { motion } from "framer-motion";
import ServicesCategories from "./ServicesCategories";
import FoundCategory from "./FoundCategory";
import PageBanner from "../common/PageBanner";

const ServicesContent: React.FC = () => {
  return (
    <>
      <PageBanner />
      <motion.div
        {...{
          className:
            "w-full gap-4 bg-white/30 backdrop-blur-md px-4 sm:px-6 lg:px-8 pt-20 pb-6 shadow-md rounded-lg",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Heading */}
        <div className="flex items-center justify-center mt-4 ">
          <div className="mb-6 inline-block">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              Our Services
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-4">
          {/* Left Section */}
          <div className="w-full md:w-2/3 bg-gray-50 dark:bg-gray-900 rounded-md p-4">
            <ServicesCategories />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-900 rounded-md p-4">
            <FoundCategory />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ServicesContent;
