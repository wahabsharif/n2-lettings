import { propertyTermsData } from '@/data/propertyTermsData';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PropertyTerms: React.FC = () => {
    return (
        <div className="container mx-auto px-4 w-full md:max-w-6xl">
            <h2 className="text-2xl font-bold text-left mb-4">What&apos;s included?</h2>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-300 mb-4">
                    <thead>
                        <tr className="bg-red-100 dark:bg-gray-900">
                            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-left"></th>
                            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-center">Standard Lettings</th>
                            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-center">
                                Lettings & Property Management
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {propertyTermsData.map((item) => (
                            <tr
                                key={item.id}
                                className="bg-red-100 dark:bg-gray-900"
                            >
                                {/* Term column */}
                                <td className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-left  text-gray-700 dark:text-gray-300">
                                    {item.term}
                                </td>

                                {/* Option 1 column */}
                                <td className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-center">
                                    {item.option1 && (
                                        <span className="flex justify-center items-center">
                                            <FaCheck className="text-gray-400 text-sm" />
                                        </span>
                                    )}
                                </td>

                                {/* Option 2 column */}
                                <td className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-center">
                                    {item.option2 && (
                                        <span className="flex justify-center items-center">
                                            <FaCheck className="text-gray-400 text-sm" />
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
                We&apos;re proud to say that we find the highest quality tenants for our client&apos;s properties, it&apos;s important that high quality tenants high quality care. After all, a happay tenant means a happy landlord, and that&apos;s why we go above and beyond to make sure any issues that arise are dealt with in the shortest time possible.
            </p>
        </div>
    );
};

export default PropertyTerms;
