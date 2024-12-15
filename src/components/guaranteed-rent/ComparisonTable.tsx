import { comparisonData } from '@/data/rentGuarantee';
import React from 'react';
import { FaCheck } from 'react-icons/fa';



const ComparisonTable: React.FC = () => {
  return (
    <div className="container mx-auto px-4 w-full md:max-w-6xl">
      {/* Heading and Paragraph */}
      <h2 className="text-2xl font-bold text-left mb-4">Comparison with High Street Agents</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-left">
        Compare the benefits of N2 Lettings Guaranteed Rent scheme with traditional high street agents.
      </p>

      {/* Table - wrap in a div for horizontal scroll */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse md:mb-8">
          <thead>
            <tr className="bg-white dark:bg-gray-900">
              <th className="px-4 py-2 border-b border-black dark:border-white text-left">Comparison</th>
              <th className="px-4 py-2 border-b border-black dark:border-white text-left">Typical High Street Agent</th>
              <th className="px-4 py-2 border-b border-black dark:border-white text-left">
                <div className="flex items-center">
                  <span className="text-red-500 mr-1">N2 Lettings</span>
                  Guaranteed Rent
                  <span className="flex items-center justify-center bg-green-600 ml-2 rounded-sm w-5 h-5">
                    <FaCheck className="text-white text-sm" />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr
                key={row.id}
                className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''}`}
              >
                <td className="px-4 py-2">{row.comparison}</td>
                <td className="px-4 py-2">{row.typicalHighStreetAgent}</td>
                <td className="px-4 py-2">{row.n2LettingsGuaranteedRent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
