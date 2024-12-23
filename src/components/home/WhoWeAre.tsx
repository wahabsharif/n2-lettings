// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import whoWeAre from "@/assets/images/home/about-us.jpeg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const WhoWeAre: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-start py-5 px-6">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 justify-start">
        <Image
          src={whoWeAre}
          alt="N2 Lettings"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          width={1000}
          height={1000}
        />
      </div>

      {/* Right side: Content */}
      <div className="w-full md:w-1/2 md:pl-12">
        <h2 className="text-3xl font-bold text-gray-800  mb-4">Who We Are? </h2>
        <p className="text-lg text-gray-600 mb-6">
          N2 Lettings and Management Ltd is a full-service real estate brokerage
          firm operating in South-West London. We promise to provide our clients
          with services in the world of property whether they own themselves or
          may be interested to live in. We provide them with a comprehensive
          plan to help them make the best decision which satisfies their need to
          find a residential space they can call home.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          So, if you happen to be looking for our type of services, specifically
          in the South London area, be sure to drop by as we will be more than
          happy to assist you in fulfilling all your specific needs and
          requirements.
        </p>

        <div className="space-y-4">
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-3xl text-thRed  mr-3" />
              <Link
                href="https://www.google.com/maps?q=30+Monarch+Parade,+London+Road,+Mitcham+CR4+3HA"
                target="_blank"
                className="hover:text-thRed text-thGray"
              >
                Head office: 30 Monarch Parade, London Road, Mitcham CR4 3HA
              </Link>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-3xl text-thRed  mr-3" />
              <Link
                href="tel:02034170607"
                className="hover:text-thRed text-thGray"
              >
                020 34170607
              </Link>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-3xl text-thRed  mr-3" />
              <Link
                href="mailto:info@n2lettings.com"
                className="hover:text-thRed text-thGray"
              >
                info@n2lettings.com
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <div className="my-4">
            <Link href="/services" className="hover:text-thRed text-thGray">
              <h3 className="font-semibold">Our Services</h3>
            </Link>
            <p className="text-sm text-gray-500">
              Explore our services for your real estate needs
            </p>
          </div>
          <div className="my-4">
            <Link href="/about" className="hover:text-thRed text-thGray">
              <h3 className="font-semibold">About Us</h3>
            </Link>
            <p className="text-sm text-gray-500">
              Learn more about N2 Lettings and Management
            </p>
          </div>
          <div className="my-4">
            <Link href="/contact" className="hover:text-thRed text-thGray">
              <h3 className="font-semibold">Contact Us</h3>
            </Link>
            <p className="text-sm text-gray-500">
              Get in touch with us for any inquiries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
