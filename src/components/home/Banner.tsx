import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/images/home/banner-image.png";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Banner: React.FC = () => {
  return (
    <section className="flex flex-col-reverse w-full py-20 justify-center md:flex-row items-center min-h-screen px-4 md:px-8 overflow-x-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl grad-text font-bold text-gray-800 tracking-widest">
          N2 LETTINGS
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 tracking-[6px] sm:tracking-[8px]">
          Your Real Estate Agent
        </h2>
        <p className="text-gray-500 mb-4 text-sm sm:text-base md:text-lg">
          N2 Lettings and Management Ltd is a full-service real estate brokerage
          in South-West London, offering tailored property solutions to help
          clients find a residential space they can call home.
        </p>
        <div className="space-x-2 flex justify-center items-center my-4">
          <Link
            href={"#"}
            className="p-2 bg-gray-800 rounded-lg  text-white hover:bg-thRed transition ease-in-out"
          >
            <FaFacebookF />
          </Link>
          <Link
            href={"#"}
            className="p-2 bg-gray-800 rounded-lg font-bold text-white hover:bg-thRed transition ease-in-out"
          >
            <FaInstagram />
          </Link>
          <Link
            href={"#"}
            className="p-2 bg-gray-800 rounded-lg  text-white hover:bg-thRed transition ease-in-out"
          >
            <FaXTwitter />
          </Link>
          <Link
            href={"#"}
            className="p-2 bg-gray-800 rounded-lg  text-white hover:bg-thRed transition ease-in-out"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        <div className="space-x-2 flex justify-center items-center">
          <Link
            href={"/tenants"}
            className="bg-thRed uppercase text-center text-xs tracking-widest text-white px-6  py-3 rounded-lg shadow-lg hover:bg-thGray w-48"
          >
            Tenants
          </Link>
          <Link
            href={"/landlords"}
            className="bg-thRed uppercase text-center text-xs tracking-widest text-white px-6  py-3 rounded-lg shadow-lg hover:bg-thGray w-48"
          >
            Landlords
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center max-w-full">
        <Image
          src={bannerImage}
          alt="Banner Image"
          className="w-full max-w-full h-auto"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default Banner;
