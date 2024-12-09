"use client";
import React from "react";
import Slider from "react-slick";
import { newsAndBlogsData } from "@/data/newsAndBlogsData";
import Image from "next/image";

// Slick Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const NewsAndBlogsSlider = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-center">
        <div className="bg-thRed/20 p-1 px-2 inline-block rounded-full">
          <h3 className="uppercase text-md md:text-lg lg:text-xl text-center tracking-widest text-thRed">
            News & Blogs
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Latest News Feeds
        </h2>
      </div>
      <Slider {...settings}>
        {newsAndBlogsData.map((item, index) => (
          <div key={index} className="p-4">
            <div className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src={item.image || "/images/placeholder-400x300.png"}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="p-4">
                <span className="text-sm text-gray-500">{item.category}</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2">{item.date}</p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsAndBlogsSlider;
