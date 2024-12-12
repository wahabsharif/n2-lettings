"use client";

import { useParams } from "next/navigation";
import { SetStateAction, useState } from "react";
import { listingsData } from "@/data/listingsData";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";

const PropertyDetails = () => {
  const params = useParams();
  const slug = params?.slug;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false); // State for booking modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [, setDirection] = useState(0);

  // Find the property by slug
  const property = listingsData.find((item) => item.slug === slug);

  if (!property) {
    return (
      <section className="container mx-auto p-6 min-h-screen text-center">
        <h1 className="text-3xl font-bold text-red-600 dark:text-red-400">
          Property not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Please check the URL or return to the listings page.
        </p>
      </section>
    );
  }

  const formattedPrice = property.price.toLocaleString();

  const openModal = (index: SetStateAction<number>) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const openBookModal = () => {
    setIsBookModalOpen(true); // Open the booking modal
    document.body.style.overflow = "hidden";
  };

  const closeBookModal = () => {
    setIsBookModalOpen(false); // Close the booking modal
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % property.imgSrc.length
    );
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + property.imgSrc.length) % property.imgSrc.length
    );
  };

  const variants = {
    enter: { opacity: 0, scale: 0.8 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <section className="container mx-auto p-6 min-h-screen bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-gray-100">
        {property.title}
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {property.imgSrc.map((src, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-md shadow-lg cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  width={1000}
                  height={1000}
                  src={src}
                  alt={`Image ${index + 1} of ${property.title}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow-lg sticky top-6">
          <h2 className="text-3xl font-bold mb-6 text-green-600 dark:text-green-400">
            £{formattedPrice} {property.units}
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <strong className="font-semibold">Property Type:</strong>{" "}
              {property.propertyType}
            </li>
            <li>
              <strong className="font-semibold">Property Status:</strong>{" "}
              {property.propertyStatus}
            </li>
            <li>
              <strong className="font-semibold">Beds:</strong> {property.beds}
            </li>
            {property.baths && (
              <li>
                <strong className="font-semibold">Baths:</strong>{" "}
                {property.baths}
              </li>
            )}
            <li>
              <strong className="font-semibold">Description:</strong>{" "}
              {property.description}
            </li>
          </ul>

          {/* Book Now Button */}
          <button
            className="mt-8 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            onClick={openBookModal}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-md bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative w-full max-w-3xl h-[80vh] p-4">
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 text-2xl font-semibold p-2 rounded-full hover:bg-gray-700"
              onClick={closeModal}
            >
              <TiTimes />
            </button>
            <motion.div
              key={currentImageIndex}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
              {...{ className: "w-full h-full" }}
            >
              <Image
                width={1000}
                height={1000}
                src={property.imgSrc[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1} of ${property.title}`}
                className="w-full h-full object-contain rounded-md"
              />
            </motion.div>
            <div className="flex justify-between mt-4 px-4">
              <button
                className="text-white bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
                onClick={prevImage}
              >
                <FaArrowLeft />
              </button>
              <button
                className="text-white bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
                onClick={nextImage}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-md bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 text-2xl font-semibold p-2 rounded-full hover:bg-gray-700"
              onClick={closeBookModal}
            >
              <TiTimes />
            </button>
            <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
              N2 Lettings & Management
            </h3>
            <p className="mt-4 text-gray-600 text-center dark:text-gray-300">
              Please fill in the details below to book this property.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  rows={4}
                  value={`Hello, I am interested in ${property.title}`}
                  onChange={() => {
                    // Handle the change event if necessary
                  }}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <select
                  id="role"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Select</option>
                  <option value="buyer">I&apos;m a Buyer</option>
                  <option value="tenant">I&apos;m a Tenant</option>
                  <option value="agent">I&apos;m an Agent</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertyDetails;
