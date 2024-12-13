"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ServicesCategories from "./ServicesCategories";
import FoundCategory from "./FoundCategory";


const ServicesContent: React.FC = () => {
    return (
        <motion.div
            {...{
                className:
                    " w-[100%]  gap-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md px-8 md:px-0 pt-32 md:pb-4 shadow-md rounded-lg",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Heading */}
            <h2 className="text-center text-2xl font-bold mb-6">Our Services</h2>

            <div className="flex flex-col md:flex-row justify-center items-start mx-auto md:gap-8 px-8">
                {/* Left Section */}
                <div className="w-full md:w-2/3 p-6 bg-red-50 dark:bg-gray-900 ">
                    <ServicesCategories/>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/3 p-3 min-h-screen bg-gray-50 dark:bg-gray-900">
                    <FoundCategory/>
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesContent;
