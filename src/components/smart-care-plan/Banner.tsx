"use client";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const SmartCareBanner: React.FC = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center h-[30rem] flex items-center justify-center text-center"
            style={{
                backgroundImage: `
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
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-2xl md:text-4xl font-bold bg-gray-400 p-4 text-gray-700 dark:bg-gray-900 dark:text-gray-300 md:mt-12 uppercase">Smart care plan</h1>
            </motion.div>
        </section>
    );
};

export default SmartCareBanner;
