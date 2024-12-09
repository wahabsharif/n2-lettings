"use client";
import React from "react";
import { motion } from "framer-motion";
import { amenitiesData } from "@/data/amenitiesData";

const OurAmenities: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center cursor-pointer">
        <div className="flex items-center justify-center">
          <div className="bg-thRed/20 p-1 px-2 inline-block rounded-full">
            <h3 className="uppercase text-md md:text-lg lg:text-xl text-center tracking-widest text-thRed">
              Our Aminities
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mb-6 inline-block">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              Building Aminities
            </h2>
          </div>
        </div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {amenitiesData.map(({ id, icon: Icon, title, description }) => (
            <motion.div
              key={id}
              {...{
                className:
                  "bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center backdrop-blur-md transition-all duration-300 ease-in-out",
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-center items-center text-6xl text-thRed mb-4">
                <Icon />
              </div>
              <h3 className="text-xl font-medium text-black dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-400">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAmenities;
