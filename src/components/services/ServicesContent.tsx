"use client";
import React from "react";
import { motion } from "framer-motion";
import ServicesCategories from "./ServicesCategories";
import FoundCategory from "./FoundCategory";

const ServicesContent: React.FC = () => {
    return (
        <motion.div
            {...{
                className: "w-full gap-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md px-4 sm:px-6 lg:px-8 pt-20 pb-6 shadow-md rounded-lg"
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Heading */}
            <h2 className="text-center text-2xl font-bold mb-8">Our Services</h2>

            <div className="flex flex-col md:flex-row justify-center items-start gap-4">
                {/* Left Section */}
                <div className="w-full md:w-2/3 bg-red-50 dark:bg-gray-900 rounded-md p-4">
                    <ServicesCategories />
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-900 rounded-md p-4">
                    <FoundCategory />
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesContent;
