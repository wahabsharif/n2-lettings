import Link from 'next/link';
import React from 'react';

interface BranchData {
  id: number;
  mitcham: { name: string; email: string; contact: string };
  cheam: { name: string; email: string; contact: string };
}

const branchData: BranchData[] = [
  {
    id: 1,
    mitcham: { name: 'N2 Lettings', email: 'mitcham@n2lettings.com', contact: '020 34170607' },
    cheam: { name: 'N2 Lettings', email: 'cheam@n2lettings.com', contact: '020 86427175' },
  },
];

const ContactLettings: React.FC = () => {
  return (
    <div className="container mx-auto px-4 w-full md:max-w-6xl mb-8">
      {/* Heading and Paragraph */}
      <h2 className="text-2xl font-bold text-left mb-4">Contact N2 Lettings Guaranteed Rent</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-left">
        We're committed to meeting and exceeding your expectations with our Guaranteed Rent—put our experience and knowledge of lettings to work for you. <span className="text-cyan-500 px-1">Leave us a message</span> or contact the nearest N2 Lettings.
      </p>

      {/* Table - wrap in a div for horizontal scroll */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse md:mb-8">
          <thead>
            <tr className="bg-white dark:bg-gray-900">
              <th className="px-4 py-2 border-b border-black dark:border-white text-left">Mitcham Branch</th>
              <th className="px-4 py-2 border-b border-black dark:border-white text-left">Cheam, Sutton Branch</th>
            </tr>
          </thead>
          <tbody>
            {branchData.map((row) => (
              <React.Fragment key={row.id}>
                {/* First Row: Name and Email */}
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="px-4 py-2">
                    <div className="font-semibold">{row.mitcham.name}</div>
                    <span className="text-cyan-500">{row.mitcham.email}</span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="font-semibold">{row.cheam.name}</div>
                    <span className="text-cyan-500">{row.cheam.email}</span>
                  </td>
                </tr>
                {/* Second Row: Contact */}
                <tr className="dark:bg-gray-900">
                  <td className="px-4 py-2">
                    <Link href={`tel:${row.cheam.contact}`} className="text-gray-600 dark:text-gray-300 hover:underline">
                      {row.cheam.contact}
                    </Link>
                  </td>
                  <td className="px-4 py-2 ">
                    <Link href={`tel:${row.cheam.contact}`} className="text-gray-600 dark:text-gray-300 hover:underline">
                      {row.cheam.contact}
                    </Link>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactLettings;
