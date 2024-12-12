import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/images/home/banner-image.png";
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col mt-20 md:flex-row items-center min-h-screen p-8 md:p-16">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-2xl md:text-4xl lg:text-6xl grad-text font-bold text-gray-800 tracking-widest">
          N2 LETTINGS
        </h1>
        <h2 className="text-lg text-gray-600 mb-4 tracking-[8px]">
          Your Real Estate Agent
        </h2>
        <p className="text-gray-500 mb-4">
          N2 Lettings and Management Ltd is a full-service real estate brokerage
          in South-West London, offering tailored property solutions to help
          clients find a residential space they can call home.
        </p>
        <div className="space-y-2 space-x-2">
          <Link
            href={"/tenants"}
            className="bg-thRed uppercase text-center text-xs tracking-widest text-white px-16 py-3 rounded-lg shadow-lg hover:bg-thGray w-48"
          >
            Tenants
          </Link>
          <Link
            href={"/landlords"}
            className="bg-thRed uppercase text-center text-xs tracking-widest text-white px-16 py-3 rounded-lg shadow-lg hover:bg-thGray w-48"
          >
            Landlords
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={bannerImage}
          alt="Banner Image"
          className="w-full max-w-sm md:max-w-md"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Banner;
