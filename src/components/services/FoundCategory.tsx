import React from 'react'

const FoundCategory = () => {
    return (
        <>
            <h3 className="text-lg font-bold mb-2">Message us to find out more </h3>
            <p className="text-gray-600  dark:text-gray-300 mb-4">Contact us using the form below. Please let us know your requirements and someone will get back to you soon.</p>

            <form className="flex flex-col gap-4">
                <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-1">
                        Information
                    </label>
                    <select
                        id="role"
                        className="w-full p-2 border dark:bg-gray-900 dark:text-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">I'm a</option>
                        <option value="tenant">Tenant</option>
                        <option value="landlord">Landlord</option>
                    </select>
                </div>

                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-300"
                    />
                </div>

                <input
                    type="email"
                    placeholder="Email Address"
                    className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-300"
                />

                <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-300"
                />

                <div className="flex items-start gap-2">
                    <input type="checkbox" id="agree" className="w-4 h-4" />
                    <label htmlFor="agree" className="text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-300">
                        By using this form you agree with the storage and handling of your data by this website in accordance with our Privacy Policy
                    </label>
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default FoundCategory