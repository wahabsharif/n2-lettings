"use client";

import React from "react";

const SiteBack: React.FC = () => {
    return (

        <section className="flex flex-col items-center justify-center w-full bg-white dark:bg-gray-900 ">
            <h2 className="text-center text-2xl font-bold md:mt-8">Guaranteed Rent Scheme</h2>

            <div className="flex flex-wrap w-11/12 md:w-10/12 lg:w-8/12 overflow-hidden">
                {/* Left Sub-Div */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center text-thRed dark:text-gray-100">
                    <h1 className="text-xl font-semibold mb-2">&quot;Sit back, collect</h1>
                    <h2 className="text-xl font-semibold mb-2">the rent, we&apos;ll look</h2>
                    <h3 className="text-xl font-semibold mb-2">after your</h3>
                    <h4 className="text-xl font-semibold mb-4">&quot;property&quot;</h4>
                </div>

                {/* Right Sub-Div */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Our team of experts are focused on helping you maximise the potential of every property, no matter how big or small.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Our experienced and professional agents know and understand their local markets. The combination of our knowledge, along with property and building industry expertise and information gathered from our national estate agency network, means we can provide a service that is second to none.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        We offer many services for landlords, Our Guaranteed Rent has proven to be very effective and most favoured, simply because this leaves you free to concentrate on your next opportunity.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SiteBack;
