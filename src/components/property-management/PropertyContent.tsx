"use client";

import React from "react";

const PropertyContent: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full bg-white dark:bg-gray-900 ">
            <div className="flex flex-wrap w-11/12 md:w-10/12 lg:w-8/12    overflow-hidden">
                {/* Left Sub-Div */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-start text-gray-600 dark:text-gray-100">
                    <h1 className="text-base font-semibold tracking-widest  mb-3">&quot;We strive to make sure</h1>
                    <h2 className="text-base font-semibold tracking-widest  mb-3">each and every one of our</h2>
                    <h3 className="text-base font-semibold tracking-widest  mb-3">clients is given peace of</h3>
                    <h3 className="text-base font-semibold tracking-widest  mb-3">mind that their</h3>
                    <h4 className="text-base font-semibold tracking-widest  mb-5">investment is getting the</h4>
                    <h4 className="text-base font-semibold tracking-widest  mb-5">care and attention it</h4>
                    <h4 className="text-base font-semibold tracking-widest  mb-5">deserves&quot;</h4>
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

export default PropertyContent;
