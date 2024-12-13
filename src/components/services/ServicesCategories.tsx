import Image from 'next/image'
import React from 'react'

const ServicesCategories = () => {
    return (
        <>
            <h3 className="text-lg font-bold text-red-500 mb-2 text-center">N2 Lettings provides the following services:</h3>
            <ul className="list-disc text-md font-semibold   text-gray-700 dark:text-gray-300 list-inside mb-6">
                <li>Building work</li>
                <li>Cleaning</li>
                <li>Removals/Rubbish clearance</li>
                <li>Plumbing</li>
                <li>Gas certificate</li>
                <li>EPC</li>
                <li>EICR</li>
            </ul>

            <h4 className="text-lg font-semibold text-center text-red-300 mb-4">Proud Member of the Property Redress Scheme</h4>
            <div className="border-2 border-gray-300 p-6 rounded-md flex justify-center items-center flex-col">
                {/* Image */}
                <div className="mb-4">
                    <Image
                        src="/images/prs_certificate.jpeg"
                        alt="Certificate Image"
                        width={600}
                        height={400}
                        className="rounded-md "
                    />
                </div>
                <div className="mb-4">
                    <Image
                        src="/images/cmp_certificate.jpeg"
                        alt="Certificate Image"
                        width={600}
                        height={400}
                        className="rounded-md"
                    />
                </div>
            </div>

        </>
    )
}

export default ServicesCategories