import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface PropertyTerm {
    id: number;
    term: string; // Content for the first column
    option1: boolean; // Whether to show the check icon for the second column
    option2: boolean; // Whether to show the check icon for the third column
}

const propertyTermsData: PropertyTerm[] = [
    { id: 1, term: 'Comprehensive marketing to find the right tenant', option1: true, option2: true },
    { id: 2, term: 'Obtaining tenant references', option1: true, option2: true },
    { id: 3, term: 'Tenant identify verification', option1: true, option2: true },
    { id: 4, term: 'Right to Rent checks', option1: true, option2: true },
    { id: 5, term: 'Preparation of tenancy agreement', option1: true, option2: true },
    { id: 6, term: 'Pre-tenancy saftey checks', option1: true, option2: true },
    { id: 7, term: 'Pre-tenancy clean & inventory check-in', option1: true, option2: true },
    { id: 8, term: 'Collection of rent', option1: true, option2: true },
    { id: 9, term: 'Transfer of utilities', option1: true, option2: true },
    { id: 10, term: 'Deposit claim negotiation,compilation & submission', option1: true, option2: true },
    { id: 11, term: 'Compliance advice', option1: true, option2: true },
    { id: 12, term: 'Dedicated Property Manager', option1: false, option2: true },
    { id: 13, term: 'Proactive credit control', option1: false, option2: true },
    { id: 14, term: 'keyholding service', option1: false, option2: true },
    { id: 15, term: 'Arranging payments of outgoings', option1: false, option2: true },
    { id: 16, term: 'Arranging quotes,repairs & maintenance', option1: false, option2: true },
    { id: 17, term: '24-hour emergency contractors', option1: false, option2: true },
    { id: 18, term: 'property inspections', option1: false, option2: true },
    { id: 19, term: 'Managing the check out process', option1: false, option2: true },

];

console.log("data", propertyTermsData)

const PropertyTerms: React.FC = () => {
    return (
        <div className="container mx-auto px-4 w-full md:max-w-6xl">
            <h2 className="text-2xl font-bold text-left mb-4">What's included?</h2>

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
                                className="bg-red-100 dark:even:bg-gray-900"
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
                We're proud to say that we find the highest quality tenants for our client's properties, it's important that high quality tenants high quality care. After all, a happay tenant means a happy landlord, and that's why we go above and beyond to make sure any issues that arise are dealt with in the shortest time possible.
            </p>
        </div>
    );
};

export default PropertyTerms;
