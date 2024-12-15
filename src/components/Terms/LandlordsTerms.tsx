import React from "react";
import { landlordTermsData } from "@/data/landlordTermsData";

const LandlordsTerms: React.FC = () => {
  // Function to parse the content and convert lines starting with "-" to list items
  const parseContent = (content: string) => {
    const lines = content.split("\n");
    const bulletLines = lines.filter((line) => line.startsWith("-"));
    const nonBulletLines = lines.filter((line) => !line.startsWith("-"));

    return (
      <>
        {nonBulletLines.map((line, index) => (
          <p
            key={index}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-2"
          >
            {line}
          </p>
        ))}
        {bulletLines.length > 0 && (
          <ul className="list-disc pl-6">
            {bulletLines.map((line, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-2"
              >
                {line.replace(/^- /, "")}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row space-y-8 lg:space-x-8 dark:bg-gray-900 dark:text-white">
      {/* Content Section */}
      <div className="w-full lg:w-2/3">
        <div className="flex justify-center items-center my-5">
          <h1 className="text-xl md:text-4xl text-center font-bold">
            0% Commission On Guaranteed Rent
          </h1>
        </div>
        <h2 className="text-lg md:text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
          {landlordTermsData.title}
        </h2>
        {landlordTermsData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-md md:text-2xl font-semibold text-thRed mb-4">
              {section.title}
            </h3>
            {parseContent(section.content)}
          </div>
        ))}
      </div>

      {/* Sticky Form Section */}
      <div className="w-full lg:w-1/3 sticky top-16   bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Get in Touch
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Contact us using the form below. Please let us know your requirements
          and someone will get back to you soon.
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              I&apos;m a
            </label>
            <select
              id="role"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value="landlord"
              disabled
            >
              <option value="landlord">Landlord</option>
              <option value="tenant">Tenant</option>
            </select>

          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Last Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              property size
            </label>
            <select
              id="role"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="" disabled>Select Property Size</option> {/* Placeholder option */}
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="commercial">Commercial</option>
              <option value="for-sale">For Sale</option>
              <option value="for-rent">For Rent</option>
            </select>




          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Mobile
            </label>
            <input
              id="mobile"
              type="text"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Mobile"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              rows={4}
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandlordsTerms;
