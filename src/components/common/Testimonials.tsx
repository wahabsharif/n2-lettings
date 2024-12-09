"use client";
import { FC } from "react";
import Slider from "react-slick";
import { testimonials } from "@/data/testimonialsData";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

// Slick Slider settings with auto-slide and responsive design
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

const Testimonials: FC = () => {
  return (
    <section className="container mx-auto p-6">
      {/* Section Title */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-thRed/20 p-1 px-2 inline-block rounded-full">
          <h3 className="uppercase text-md md:text-lg lg:text-xl text-center tracking-widest text-thRed">
            Testimonials
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          What do our customers say?
        </h2>
      </div>
      {/* Slider Component */}
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <motion.div
              {...{
                className:
                  "bg-white p-2 rounded-lg cursor-pointer shadow-lg flex flex-col justify-between h-full relative",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Testimonial Text and Quote Icon */}
              <div className="relative mb-4 z-10">
                <p className="text-lg text-gray-600 mb-4 line-clamp-3">
                  {testimonial.text}
                </p>
                <div className="absolute left-0 top-0 text-thRed/20 text-8xl -z-10">
                  <FaQuoteLeft />
                </div>
              </div>

              <div className="flex justify-start mb-6 relative z-10">
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.photo || "/src/assets/images/person.png"}
                    alt={testimonial.name}
                    width={500} // Size of the image
                    height={500}
                    className="w-16 rounded-full object-cover border-4 border-gray-300"
                  />
                  <div className="text-start">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
