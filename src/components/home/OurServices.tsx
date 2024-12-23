import React from "react";
import Link from "next/link";
import { FaHandshake, FaHome } from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";

const services = [
  {
    icon: <FaHandshake className="text-4xl text-blue-500" />,
    title: "Guaranteed Rent",
    description:
      "Our Guaranteed Rent has proven to be very effective and most favoured, simply because this leaves you free to concentrate on your next opportunity.",
    link: "#",
  },
  {
    icon: <FaHome className="text-4xl text-green-500" />,
    title: "Property Management",
    description:
      "Our property management teams never stand still when it comes to the day-to- day managing of your asset, finding and retaining tenants, collecting rent and overseeing maintenance and compliancy",
    link: "#",
  },
  {
    icon: <FaVanShuttle className="text-4xl text-yellow-500" />,
    title: "Smartcare Plan",
    description:
      "Our aim is to provide a simple and affordable insurance package",
    link: "#",
  },
];

const OurServices = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
