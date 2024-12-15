import React from "react";
import Link from "next/link";
import { FaHome, FaKey, FaDollarSign } from "react-icons/fa";

const services = [
  {
    icon: <FaHome className="text-4xl text-blue-500" />,
    title: "Buy a Home",
    description:
      "Find your dream home from a wide variety of listings. Discover properties with the features and amenities you need, tailored to your preferences.",
    link: "/buy",
  },
  {
    icon: <FaKey className="text-4xl text-green-500" />,
    title: "Rent a Home",
    description:
      "Explore rental properties that suit your needs. Find the perfect space for your lifestyle, whether short-term or long-term.",
    link: "/rent",
  },
  {
    icon: <FaDollarSign className="text-4xl text-yellow-500" />,
    title: "Sell a Home",
    description:
      "List your property and connect with potential buyers. Benefit from expert guidance to maximize your sale value.",
    link: "/sell",
  },
];

const OurServices = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center">
        <div className="bg-thRed/20 p-1 px-2 inline-block rounded-full">
          <h3 className="text-md md:text-lg  uppercase lg:text-xl text-center tracking-widest text-thRed">
            Our Services
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 ">
        <div className="mb-6 inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Our Main Focus
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 block h-full">
              <div className="flex justify-center items-center h-20 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-center text-gray-600 mb-4">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
