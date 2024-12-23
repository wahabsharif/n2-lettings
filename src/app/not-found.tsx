import WebLayout from "@/layouts/WebLayout";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <WebLayout>
      <div className="flex items-center justify-center h-screen p-2">
        <div className="text-center">
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-800 relative dark:text-gray-200 z-10">
              404
            </h1>
            <div className="absolute inset-0 w-40 h-40 bg-blue-500 blur-xl opacity-50 rounded-full mx-auto animate-pulse z-0"></div>
          </div>
          <p className="mt-6 text-xl font-medium text-gray-700">
            Oops! The page you are looking for doesn’t exist.
          </p>
          <p className="mt-2 text-gray-500">
            It looks like you might be lost. Let&apos;s help you find your way.
          </p>
          <div className="mt-6">
            <Link
              href={"/"}
              className="px-6 py-3 text-white bg-thRed hover:bg-thGray rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default NotFoundPage;
