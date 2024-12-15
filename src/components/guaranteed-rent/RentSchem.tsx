"use client";

import { rentSchemaData } from "@/data/rentSchemaData";
import React from "react";

import { FaCheck } from "react-icons/fa";

// RentSchema Component
const RentSchema: React.FC = () => {
    return (
        <section className="w-full bg-white dark:bg-gray-900 mb-8">
            {/* Heading */}
            <div className="text-left mb-12 flex flex-col items-center justify-center w-full px-4">
                <h1 className="text-3xl font-bold text-gray-500 dark:text-gray-100 w-full max-w-6xl">Benefits of our Guaranteed Rent Scheme</h1>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center justify-center w-full px-4">
                {/* Boxes Container */}
                <div className="grid grid-cols-1 md:grid-cols-2  w-full max-w-6xl">
                    {rentSchemaData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 dark:border-gray-700 p-6 inline-flex flex-col justify-start items-start"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center">
                                {item.heading}
                                <span className="bg-green-600 ml-2 rounded-sm">
                                    <FaCheck className=" p-1 text-white" />

                                </span>
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RentSchema;
