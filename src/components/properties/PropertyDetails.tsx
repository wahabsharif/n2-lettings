"use client";

import { useParams } from "next/navigation";
import { listingsData } from "@/data/listingsData";
import Image from "next/image";

const PropertyDetails = () => {
  const params = useParams(); // Retrieve dynamic route params
  const slug = params?.slug;

  // Find the property by slug
  const property = listingsData.find((item) => item.slug === slug);

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <section className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">{property.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Gallery */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.imgSrc.map((src, index) => (
              <Image
                key={index}
                width={1000}
                height={1000}
                src={src}
                alt={`Image ${index + 1} of ${property.title}`}
                className="w-full h-full object-cover rounded-md"
              />
            ))}
          </div>
        </div>
        {/* Property Details */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            £{property.price} {property.units}
          </h2>
          <p className="mb-4">
            <strong>Property Type:</strong> {property.propertyType}
          </p>
          <p className="mb-4">
            <strong>Property Status:</strong> {property.propertyStatus}
          </p>
          <p className="mb-4">
            <strong>Beds:</strong> {property.beds}
          </p>
          {property.baths && (
            <p className="mb-4">
              <strong>Baths:</strong> {property.baths}
            </p>
          )}
          <p className="mb-4">
            <strong>Description:</strong> {property.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
