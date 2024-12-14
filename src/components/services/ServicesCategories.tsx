import Image from "next/image";
import React from "react";

const ServicesCategories = () => {
  return (
    <div className="p-4 sm:p-6 md:p-0">
      <h3 className="text-lg font-bold text-red-500 mb-4 text-center">
        N2 Lettings provides the following services:
      </h3>
      <ul className="list-disc text-md font-semibold text-gray-700 dark:text-gray-300 list-inside mb-6">
        <li>Building work</li>
        <li>Cleaning</li>
        <li>Removals/Rubbish clearance</li>
        <li>Plumbing</li>
        <li>Gas certificate</li>
        <li>EPC</li>
        <li>EICR</li>
      </ul>

      <h4 className="text-lg font-semibold text-center text-red-300 mb-4">
        Proud Member of the Property Redress Scheme
      </h4>

      <div className="border-2 border-gray-300 p-4 sm:p-6 rounded-md flex justify-center items-center flex-col gap-4">
        <Image
          src="/images/prs_certificate.jpeg"
          alt="PRS Certificate"
          className="w-full rounded-md"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <Image
          src="/images/cmp_certificate.jpeg"
          alt="CMP Certificate"
          className="w-full rounded-md"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default ServicesCategories;
