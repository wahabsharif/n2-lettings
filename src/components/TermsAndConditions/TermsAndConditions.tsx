"use client";
import { motion } from "framer-motion";
import { termsAndConditionsData } from "@/data/termsAndConditionsData";

const TermsAndConditions = () => {
  // Function to split the content by bullet point (-) and return it as an array of <p> tags
  const formatContent = (content: string) => {
    return content.split("-").map((item, index) => {
      if (item.trim()) {
        return (
          <p key={index} className="text-base text-gray-400 ml-4">
            {item.trim()}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-900">
      <motion.div
        {...{
          className:
            "max-w-4xl w-full bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-60 backdrop-blur-md rounded-lg p-6 space-y-6 shadow-lg dark:shadow-xl",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold w-full text-center text-blue-600 dark:text-blue-400">
          {termsAndConditionsData.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {termsAndConditionsData.introduction}
        </p>

        {termsAndConditionsData.sections.map((section, index) => (
          <motion.div
            key={index}
            {...{ className: "space-y-4" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.5, duration: 1 }}
          >
            <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-300">
              {section.title}
            </h2>
            {formatContent(section.content)}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TermsAndConditions;
