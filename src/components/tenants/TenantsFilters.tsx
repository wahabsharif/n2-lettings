"use client";
import React from "react";
import { motion } from "framer-motion";

const TenantsFilters: React.FC = () => {
  return (
    <motion.div
      {...{
        className:
          "flex flex-col w-full mb-4 md:flex-row items-center justify-between gap-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md px-8 pt-10 md:pb-4 shadow-md rounded-lg",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <select
          id="area"
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:outline-none bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
        >
          <option value="">All Areas</option>
          <option value="matcham">Matcham</option>
          <option value="morden">Morden</option>
          <option value="croydon">Croydon</option>
          <option value="colliers-wood">Colliers Wood</option>
          <option value="thornton-heath">Thornton Heath</option>
          <option value="tooting">Tooting</option>
          <option value="wandsworth">Wandsworth</option>
          <option value="wimbledon">Wimbledon</option>
          <option value="cheam">Cheam</option>
          <option value="wallington">Wallington</option>
        </select>
      </div>

      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <select
          id="bedrooms"
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:outline-none bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
        >
          <option value="">Bedrooms</option>
          <option value="room">Room</option>
          <option value="studio">Studio</option>
          <option value="1-bedroom">1 Bedroom</option>
          <option value="2-bedroom">2 Bedroom</option>
          <option value="3-bedroom">3 Bedroom</option>
          <option value="4-bedroom">4 Bedroom</option>
          <option value="5-bedroom">5 Bedroom</option>
          <option value="5-plus-bedroom">5+ Bedroom</option>
        </select>
      </div>

      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <select
          id="type"
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:outline-none bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
        >
          <option value="">Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <select
          id="budget"
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:outline-none bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
        >
          <option value="">Budget</option>
          <option value="500-1000">£ 500 - £ 1000</option>
          <option value="1100-1500">£ 1100 - £ 1500</option>
          <option value="1600-2000">£ 1600 - £ 2000</option>
          <option value="2100-2500">£ 2100 - £ 2500</option>
          <option value="2600-3000">£ 2600 - £ 3000</option>
          <option value="3100-3500">£ 3100 - £ 3500</option>
          <option value="3600-4000">£ 3600 - £ 4000</option>
        </select>
      </div>

      {/* Filter Button */}
      <div className="w-full md:w-auto mb-6 md:mb-0 ">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...{
            className:
              "w-full md:w-auto px-6 py-2 text-white font-medium rounded-md hover:bg-thGray bg-thRed focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:outline-none",
          }}
        >
          Search
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TenantsFilters;
