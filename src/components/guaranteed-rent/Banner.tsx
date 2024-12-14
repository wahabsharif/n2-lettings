"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const GuaranteedBanner: React.FC = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center h-96 flex items-center justify-center text-center"
            style={{
                backgroundImage: `
              radial-gradient(circle, rgba(220,51,50,0.5193678057160365) 0%, rgba(1,53,80,1) 67%),
              url('/uploads/4-bed-detached-house-to-rent-in-kynaston-avenue-thornton-heath-cr7-1.jpg')
            `,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <motion.div
                {...{
                    className: "relative z-10 "
                }}
                initial={{ opacity: 0, y: 50 }} // Initial state: fade in and move up
                animate={{ opacity: 1, y: 0 }} // Final state: fully visible at original position
                transition={{ duration: 1 }} // Animation duration
            >
                {/* About Us Heading */}
                <h1 className="text-2xl md:text-4xl font-bold bg-gray-400 p-4 text-gray-700 dark:bg-gray-900 dark:text-gray-300 md:mt-12">Guaranteed Rent</h1>

                {/* Breadcrumb */}

            </motion.div>
        </section>
    );
};

export default GuaranteedBanner;
