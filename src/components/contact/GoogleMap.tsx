"use client";
import React, { useState } from "react";

const GoogleMap: React.FC = () => {
  const [activeTab, setActiveTab] = useState("headOffice");

  return (
    <div className="w-[90%] mx-auto my-8">
      <div className="flex justify-center mb-4 border-b border-gray-300">
        <button
          className={`px-4 py-2 font-bold tracking-widest ${
            activeTab === "headOffice"
              ? "border-b-2 border-thRed text-thRed"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("headOffice")}
        >
          Head Office
        </button>
        <button
          className={`px-4 py-2 font-bold tracking-widest ${
            activeTab === "branchOffice"
              ? "border-b-2 border-thRed text-thRed"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("branchOffice")}
        >
          Branch Office
        </button>
      </div>

      <div className="h-96 w-full border rounded-lg overflow-hidden">
        {activeTab === "headOffice" && (
          <iframe
            src="https://www.google.com/maps?q=30+Monarch+Parade,+London+Road,+Mitcham,+CR4+3HA&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
        {activeTab === "branchOffice" && (
          <iframe
            src="https://www.google.com/maps?q=5+Ewell+Road,+Cheam,+SM3+8BZ&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default GoogleMap;
