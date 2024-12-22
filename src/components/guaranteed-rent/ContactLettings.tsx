import { branchData } from '@/data/propertyTermsData';
import Link from 'next/link';
import React from 'react';

const ContactLettings: React.FC = () => {
  return (
    <div className="container mx-auto px-4 w-full md:max-w-6xl mb-8">
      {/* Heading and Paragraph */}
      <h2 className="text-2xl font-bold text-left mb-4">Contact N2 Lettings Guaranteed Rent</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-left">
        We are committed to meeting and exceeding your expectations with our Guaranteed Rent—put our experience and
        knowledge of lettings to work for you.{' '}
        <Link href='/contact-us' className="text-cyan-500 px-1">Leave us a message</Link> or contact the nearest N2 Lettings.
      </p>

      {/* Table - wrap in a div for horizontal scroll */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse md:mb-8">
          <thead>
            <tr className="bg-white dark:bg-gray-900">
              <th className="px-4 py-2 border-b border-black dark:border-white text-left">Mitcham Branch</th>
                {/* <th className="px-4 py-2 border-b border-black dark:border-white text-left">Cheam, Sutton Branch</th> */}
            </tr>
          </thead>
          <tbody>
            {branchData.map((row) => (
              <React.Fragment key={row.id}>
                {/* First Row: Name and Email */}
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="px-4 py-2">
                    <div className="font-semibold">{row.mitcham.name}</div>
                    <Link href={`mailto:${row.mitcham.email}`} className="text-cyan-500 hover:underline">
                      {row.mitcham.email}
                    </Link>
                  </td>
                  {/* <td className="px-4 py-2">
                    <div className="font-semibold">{row.cheam.name}</div>
                    <Link href={`mailto:${row.cheam.email}`} className="text-cyan-500 hover:underline">
                      {row.cheam.email}
                    </Link>
                  </td> */}
                </tr>
                {/* Second Row: Contact1 */}
                <tr className="dark:bg-gray-900">
                  <td className="px-4 py-2">
                    <Link
                      href={`tel:${row.mitcham.contact1}`}
                      className="text-gray-600 dark:text-gray-300 hover:underline"
                    >
                      {row.mitcham.contact1}
                    </Link>
                  </td>
                  {/* <td className="px-4 py-2">
                    <Link
                      href={`tel:${row.cheam.contact1}`}
                      className="text-gray-600 dark:text-gray-300 hover:underline"
                    >
                      {row.cheam.contact1}
                    </Link>
                  </td> */}
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
