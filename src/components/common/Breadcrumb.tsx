"use client"; // Ensure it's a client component since we need to use hooks

import { usePathname } from "next/navigation";
import Link from "next/link";

// Helper function to sanitize path (convert to readable format)
const sanitizePath = (path: string) => {
  return path
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
};

const BreadCrumb = () => {
  const pathname = usePathname();

  // Split the pathname to create an array of breadcrumb segments
  const pathSegments = pathname?.split("/").filter(Boolean);

  // Sanitize the last segment of the path for the heading
  const heading = pathSegments
    ? sanitizePath(pathSegments[pathSegments.length - 1])
    : "Page";

  return (
    <div className="bg-gradient-to-r from-thGray to-gray-400 py-4 md:py-8 rounded-xl px-4 md:px-6 text-white relative">
      {/* Display Path as Heading */}
      <h1 className="text-2xl md:text-5xl font-bold text-black/80 tracking-widest mb-2 md:mb-4 relative z-10">
        {heading}
      </h1>

      <nav aria-label="breadcrumb" className="relative z-10">
        <ol className="flex flex-wrap items-center space-x-1 md:space-x-2 text-xs md:text-sm">
          <li className="breadcrumb-item">
            <Link href="/" className="text-thRed">
              Home
            </Link>
          </li>
          <span>-</span>
          {pathSegments?.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLastSegment = index === pathSegments.length - 1;

            return (
              <li
                key={href}
                className={`breadcrumb-item ${
                  isLastSegment ? "text-gray-300" : "text-blue-200"
                }`}
                aria-current={isLastSegment ? "page" : undefined}
              >
                {isLastSegment ? (
                  <span className="font-medium">{sanitizePath(segment)}</span>
                ) : (
                  <Link href={href} className="hover:text-blue-200">
                    {sanitizePath(segment)}
                  </Link>
                )}
                {!isLastSegment && <span className="mx-1 md:mx-2">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
