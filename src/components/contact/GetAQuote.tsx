"use client";
import React from "react";
import { motion } from "framer-motion";

const GetAQuote: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-16">
      {/* Background Blurs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-300 opacity-50 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-300 opacity-50 blur-3xl rounded-full"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        {...{
          className:
            "max-w-3xl mx-auto text-center bg-gray-100 p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg relative",
        }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Get a Quote
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base lg:text-lg">
          Fill out the form below, and we’ll get back to you with a personalized
          quote.
        </p>
        <form className="bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-10">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-left text-gray-700 text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left text-gray-700 text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-left text-gray-700 text-sm font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Tell us more about your requirements"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...{
              type: "submit",
              className:
                "w-full bg-thRed text-white py-2 px-4 rounded-lg font-medium hover:bg-thGray focus:outline-none focus:ring-2 focus:ring-blue-400",
            }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default GetAQuote;
