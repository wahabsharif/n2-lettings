"use client";
import React from "react";
import { motion } from "framer-motion";

const FilterBar: React.FC = () => {
  return (
    <motion.div
      {...{
        className:
          "flex flex-col w-[90%] md:flex-row items-center justify-between bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-4 shadow-md rounded-lg",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Choose Area Dropdown */}
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <select
          id="area"
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:outline-none bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
        >
          <option value="">Select Area</option>
          <option value="area1">Area 1</option>
          <option value="area2">Area 2</option>
          <option value="area3">Area 3</option>
        </select>
      </div>

      {/* Property Status Dropdown */}
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <select
          id="status"
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:outline-none bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
        >
          <option value="">Select Status</option>
          <option value="for_sale">For Sale</option>
          <option value="for_rent">For Rent</option>
        </select>
      </div>

      {/* Property Type Dropdown */}
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <select
          id="type"
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:outline-none bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
        >
          <option value="">Select Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      {/* Filter Button */}
      <div className="w-full md:w-auto ">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...{
            className:
              "w-full md:w-auto px-6 py-2 text-white font-medium rounded-md hover:bg-thGray bg-thRed focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:outline-none",
          }}
        >
          Filter
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FilterBar;
