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
        <div className="flex-1">
          <Image
            width={1000}
            height={1000}
            src={property.imgSrc || "/images/placeholder-500x500.png"}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            £{property.price} {property.units}
          </h2>
          <p className="mb-4">
            <strong>Type:</strong> {property.propertyType}
          </p>
          <p className="mb-4">
            <strong>Beds:</strong> {property.beds}
          </p>
          {property.baths && (
            <p className="mb-4">
              <strong>Baths:</strong> {property.baths}
            </p>
          )}
          <p className="mb-4">{property.description}</p>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
