"use client";

import { coveredPlanData } from "@/data/propertyTermsData";
import Image from "next/image";
import React from "react";



const CoveredPlan: React.FC = () => {
    return (
        <section className="flex justify-center items-center min-h-screen p-4">
            <div className="container mx-auto w-full max-w-6xl px-4">
                {/* Heading */}
                <h2 className="text-2xl font-bold mb-8 text-center md:text-left">What is covered?</h2>

                {/* Parent Div */}
                <div className="flex flex-wrap justify-center  gap-x-8">
                    {coveredPlanData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col md:flex-row items-center w-full md:w-[calc(50%-1rem)] gap-2 md:gap-4 ${index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                                }`}
                        >
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                width={200}
                                height={200}
                                className="w-full md:w-40 h-48 md:h-40 object-cover"
                            />
                            <div className="text-center md:text-left mb-4">
                                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm ">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoveredPlan;
