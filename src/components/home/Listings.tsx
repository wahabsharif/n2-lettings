"use client";
import { listingsData } from "@/data/listingsData";
import Image from "next/image";
import Slider from "react-slick";

// Slick Slider settings
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Listings = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-center">
        <div className="bg-thRed/20 p-1 px-2 inline-block rounded-full">
          <h3 className="uppercase text-md md:text-lg lg:text-xl text-center tracking-widest text-thRed">
            Exclusive Listings
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mb-6 inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Houses & Flats to rent
          </h2>
        </div>
      </div>
      {/* Slick Slider Component */}
      <Slider {...settings}>
        {listingsData.map((listing) => (
          <div key={listing.id} className="p-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full flex flex-col h-full relative">
              <div className="relative w-full h-48">
                {/* Set a fixed height for the image container */}
                <Image
                  width={1000}
                  height={1000}
                  src={listing.imgSrc || "/images/placeholder-500x500.png"}
                  alt={listing.title}
                  className="w-full h-full object-cover" // Image will fill the div
                />
                <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 text-xs rounded-br-lg">
                  Featured
                </div>
                {/* Background blur */}
              </div>
              <div className="p-4 flex flex-col flex-grow z-10 relative">
                <h3 className="text-lg font-semibold truncate text-black dark:text-gray-300">
                  {listing.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {listing.propertyType}
                </p>
                <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {listing.price}
                </p>
                <div className="flex gap-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Beds: {listing.beds}
                  </p>
                  {listing.baths && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Baths: {listing.baths}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Listings;
