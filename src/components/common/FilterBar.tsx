"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FilterBar: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Handle property type selection (allow multiple selections)
  const handleTypeSelection = (type: string) => {
    setSelectedTypes((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((item) => item !== type) // Deselect if already selected
        : [...prevSelected, type] // Select the type if not already selected
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedTypes([]);
  };

  return (
    <motion.div
      {...{
        className: "flex flex-col w-[90%] md:flex-row items-center justify-end bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-4"
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Property Type Buttons */}
      <div className="w-full md:w-[80%] mb-4 md:mb-0 flex flex-wrap gap-2">
        {["Room", "Studio Flat", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4 Bedroom", "5 or More Bedroom"].map((type) => (
          <button
            key={type}
            onClick={() => handleTypeSelection(type)}
            className={`px-4 py-2 rounded-md text-black focus:outline-none transition-all transform ${selectedTypes.includes(type) ? "bg-red-500" : "bg-gray-100"
              } hover:bg-red-400 active:scale-95`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Reset Filters Button */}
      <div className="w-full md:w-1/4">
        <button
          onClick={resetFilters}
          className="w-full p-2 rounded-md text-white bg-gray-300 focus:outline-none transition-all transform hover:bg-red-400 active:scale-95"
        >
          Reset
        </button>
      </div>
    </motion.div>
  );
};

export default FilterBar;
