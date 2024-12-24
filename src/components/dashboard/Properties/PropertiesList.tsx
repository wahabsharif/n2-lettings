"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import EditProperty from "./EditProperty";
import DeleteProperty from "./DeleteProperty";
import AddProperty from "./AddProperty";
import { Property } from "@/types/properties";
import Image from "next/image";
import { formatDateTime, formatAmount } from "@/helpers"; // Adjust the path based on your file structure

const PropertiesList = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchProperties();
    const intervalId = setInterval(fetchProperties, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get("/api/properties");
      const propertiesWithParsedImages = response.data.map(
        (property: Property) => {
          if (typeof property.images === "string") {
            property.images = JSON.parse(property.images);
          }
          return property;
        }
      );

      // Sort properties by created_at in descending order
      propertiesWithParsedImages.sort((a: Property, b: Property) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB.getTime() - dateA.getTime();
      });

      setProperties(propertiesWithParsedImages);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const openEditModal = (property: Property) => {
    setSelectedProperty(property);
    setEditModalOpen(true);
  };

  const openDeleteModal = (property: Property) => {
    setSelectedProperty(property);
    setDeleteModalOpen(true);
  };

  const openAddModal = () => {
    setAddModalOpen(true);
  };

  const openImageModal = (property: Property, index: number) => {
    setSelectedProperty(property);
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  const handleNextImage = () => {
    if (selectedProperty && selectedProperty.images.length > 1) {
      setCurrentImageIndex(
        (currentImageIndex + 1) % selectedProperty.images.length
      );
    }
  };

  const handlePreviousImage = () => {
    if (selectedProperty && selectedProperty.images.length > 1) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + selectedProperty.images.length) %
          selectedProperty.images.length
      );
    }
  };

  const handleRemoveImage = () => {
    if (selectedProperty && selectedProperty.images.length > 0) {
      const updatedImages = selectedProperty.images.filter(
        (_, i) => i !== currentImageIndex
      );
      const updatedProperty = { ...selectedProperty, images: updatedImages };

      setSelectedProperty(updatedProperty);

      axios
        .patch(`/api/properties?id=${selectedProperty.id}`, updatedProperty)
        .then(() => fetchProperties())
        .catch((error) => console.error("Error removing image:", error));

      if (updatedImages.length === 0) {
        setImageModalOpen(false);
      } else {
        setCurrentImageIndex((prevIndex) =>
          Math.min(prevIndex, updatedImages.length - 1)
        );
      }
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">All Properties</h1>
        <button
          onClick={openAddModal}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-2 rounded hover:scale-105 transform transition duration-200"
        >
          Add Property
        </button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-2xl cursor-pointer transition duration-300 flex flex-col justify-between"
          >
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                {property.title}
              </h3>
              <p className="text-gray-600 text-sm">{property.description}</p>
              <div className="mt-2 flex justify-between space-x-2">
                <p className="text-sm">
                  <strong>Price:</strong> £
                  {formatAmount(parseFloat(property.price.toString()))}
                </p>

                <p className="text-sm">
                  <strong>Units:</strong> {property.units}
                </p>
              </div>
              <div className="mt-2 flex justify-between space-x-2">
                <p className="text-sm">
                  <strong>Property Type:</strong> {property.property_type}
                </p>
                <p className="text-sm">
                  <strong>Property Status:</strong> {property.property_status}
                </p>
              </div>
              <div className="mt-2 flex justify-between space-x-2">
                <p className="text-sm">
                  <strong>Beds:</strong> {property.beds}
                </p>
                <p className="text-sm">
                  <strong>Baths:</strong> {property.baths}
                </p>
              </div>
            </div>

            {/* Images Section */}
            <div className="flex my-1 space-x-2">
              {property.images.slice(0, 3).map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={50}
                  height={50}
                  className="rounded-md object-cover cursor-pointer hover:opacity-80"
                  onClick={() => openImageModal(property, index)}
                />
              ))}
              {property.images.length > 3 && (
                <p className="text-gray-500 text-xs self-center">
                  +{property.images.length - 3} more
                </p>
              )}
            </div>
            <div className="my-2">
              <p className="text-xs my-1 text-gray-400">
                <strong className="text-gray-500">Updated At:</strong>{" "}
                {formatDateTime(property.updated_at)}
              </p>
              <p className="text-xs my-1 text-gray-400">
                <strong className="text-gray-500">Created At:</strong>{" "}
                {formatDateTime(property.created_at)}
              </p>
            </div>
            {/* Buttons Section */}
            <div className="flex my-2 space-x-3">
              <button
                onClick={() => openEditModal(property)}
                className="flex-1 bg-yellow-500 text-white py-2 rounded hover:scale-105 transform transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => openDeleteModal(property)}
                className="flex-1 bg-red-500 text-white py-2 rounded hover:scale-105 transform transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editModalOpen && selectedProperty && (
        <EditProperty
          property={selectedProperty}
          onClose={() => setEditModalOpen(false)}
          onUpdate={fetchProperties}
        />
      )}

      {deleteModalOpen && selectedProperty && (
        <DeleteProperty
          property={selectedProperty}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={fetchProperties}
        />
      )}

      {addModalOpen && (
        <AddProperty
          onClose={() => setAddModalOpen(false)}
          onAdd={fetchProperties}
        />
      )}

      {imageModalOpen && selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <div className="flex justify-center mb-4">
              <Image
                src={selectedProperty.images[currentImageIndex]}
                width={1000}
                height={1000}
                alt={`Property image ${currentImageIndex + 1}`}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={handlePreviousImage}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Prev
              </button>
              <button
                onClick={handleNextImage}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Next
              </button>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={handleRemoveImage}
                className="bg-red-500 text-white p-2 rounded"
              >
                Remove Image
              </button>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setImageModalOpen(false)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertiesList;
