"use client";

import React from "react";

const PackagePlan: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full bg-white dark:bg-gray-900 ">
            <div className="flex flex-wrap w-11/12 md:w-10/12 lg:w-8/12    overflow-hidden">
                {/* Left Sub-Div */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center text-gray-600 dark:text-gray-100">

                    <h3 className="text-base text-center font-semibold text-red-400 tracking-widest  mb-3">&quot;Our aim is to provide a simple and affordable insurance package&quot;</h3>
                    <h3 className="text-base text-center font-semibold text-red-400 tracking-widest  mb-3">Our aim is to provide a simple and affordable insurance package&quot;</h3>
                    <h3 className="text-base text-center font-semibold text-red-400 tracking-widest  mb-3">Our aim is to provide a simple and affordable insurance package&quot;</h3>
                    <p className="text-base text-center font-semibold tracking-widest text-red-400 mb-3">N2 Lettings</p>

                </div>

                {/* Right Sub-Div */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        To make an asset work to financial gain requires tacktical, flexible property management strategies and solutions that extract, protect and enhance value and efficiency at every stage of ownership.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Our property management teams never stand still when it comes to the day-to-day managing of your asset,finding and retaining tenants,collecting rent and overseeing maintenance and compliancy
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        Whether you own a mutli-asset portfolio of commercial properties or a buy-to-let investment, we perdict and react to market conditions ahead,tailoring our advice and, in tum,servies to make sure your property  provides you with consistent returns on investment as long as you own it.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        Get tailored, specialist advice whenever you&apos;re ready.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PackagePlan;
