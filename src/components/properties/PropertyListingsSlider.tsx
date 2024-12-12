"use client";
import { listingsData } from "@/data/listingsData";
import Image from "next/image";
import Slider from "react-slick";
import { GiBed } from "react-icons/gi";
import { FaShower } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion"; // Import framer-motion

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

const PropertyListingsSlider = () => {
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
        <div className="my-6 inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Houses & Flats to rent
          </h2>
        </div>
      </div>
      {/* Slick Slider Component */}
      <Slider {...settings}>
        {listingsData.map((listing) => (
          <Link key={listing.id} href={`/properties/${listing.slug}`}>
            <div className="p-6 cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full flex flex-col h-full relative">
                <div className="relative w-full h-48">
                  {/* Set a fixed height for the image container */}
                  <Image
                    width={1000}
                    height={1000}
                    src={listing.imgSrc[0] || "/images/placeholder-500x500.png"}
                    alt={listing.title}
                    className="w-full h-full object-cover" // Image will fill the div
                  />
                  <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 text-xs rounded-br-lg">
                    Featured
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow z-10 relative">
                  <h3 className="text-lg font-semibold truncate text-black dark:text-gray-300">
                    {listing.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {listing.propertyType}
                  </p>
                  <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    £{listing.price} {listing.units}
                  </p>
                  <div className="flex gap-4">
                    <p className="text-sm flex justify-center items-center gap-2 text-gray-600 dark:text-gray-300">
                      <GiBed />
                      Beds: {listing.beds}
                    </p>
                    {listing.baths && (
                      <p className="text-sm flex justify-center items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FaShower />
                        Baths: {listing.baths}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>

      {/* Explore More Button with Animation */}
      <div className="flex justify-center mt-4">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 },
          }}
        >
          <Link
            href={"/properties"}
            className="bg-thRed p-2 rounded-lg font-bold tracking-widest text-white"
          >
            Explore More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyListingsSlider;
