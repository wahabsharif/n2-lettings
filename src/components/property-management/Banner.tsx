"use client";

import React from "react";
import { motion } from "framer-motion";

const Banner: React.FC = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center h-[30rem] flex items-center justify-center text-center"
            style={{
                backgroundImage: `url('/uploads/2-bed-flat-with-a-separate-kitchen-in-norwood-7.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <motion.div
                {...{ className: "relative z-10" }}

                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-2xl md:text-3xl font-bold p-4 dark:bg-gray-900 dark:text-gray-300 ">
                    Project Management
                </h1>
            </motion.div>
        </section>

    );
};

export default Banner;
