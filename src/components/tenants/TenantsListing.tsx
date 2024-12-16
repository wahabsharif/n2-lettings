"use client";
import React, { useState } from "react";
import { FaBed, FaShower } from "react-icons/fa";
import { tenantsCardsListingData } from "@/data/TenantCardListingData";
import Image from "next/image";

const TenantsListing: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState(6);

  const loadMore = () => {
    setVisibleCards((prev) => prev + 6);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-8">
      {/* Left Section */}
      <div className="w-full p-6">
        <h2 className="text-xl font-bold mb-2">Exclusive Listings</h2>
        <p className="dard:text-gray-700 mb-4 uppercase tracking-widest text-orange-200">
          Flats to let in south west london
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tenantsCardsListingData.slice(0, visibleCards).map((card, index) => (
            <div
              key={index}
              className="relative border rounded-lg shadow-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 flex flex-col gap-2 overflow-hidden"
            >
              {card.isFeatured && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Featured
                </span>
              )}
              <Image
                src={card.image}
                width={1000}
                height={1000}
                alt={card.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-center text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-base font-semibold text-center mb-2 dark:bg-gray-900 dark:text-gray-300">
                  {card.price}
                </p>
                <p className="text-gray-700 dark:bg-gray-900  dark:text-gray-300 text-sm text-center mb-2">
                  {card.category}
                </p>
                <div className="flex justify-center items-center gap-4 text-gray-500">
                  {card.beds && (
                    <span className="flex items-center gap-1">
                      <FaBed /> {card.beds}
                    </span>
                  )}
                  {card.showers && (
                    <span className="flex items-center gap-1">
                      <FaShower /> {card.showers}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCards < tenantsCardsListingData.length && (
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3">
        <h2 className="text-xl font-bold mb-2">Tenant Registration</h2>
        <h3 className="text-lg font-semibold mb-1">Get Email Alerts</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Are you looking for a property? You can register with us and receive
          an email whenever we have a property that matches your requirements.
        </p>

        <form className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-300"
          />
          <input
            type="tel"
            placeholder="Mobile"
            className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-300"
          />
          <input
            type="number"
            placeholder="Bedrooms"
            className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-300"
          />
          <input
            type="text"
            placeholder="Budget"
            className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-300"
          />
          <input
            type="text"
            placeholder="Area"
            className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-300"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-thRed hover:bg-thGray text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TenantsListing;
