"use client";

import { useState } from "react";
import axios from "axios";
import { Property } from "@/types/properties"; // Import Property type

interface EditPropertyProps {
  property: Property;
  onClose: () => void;
  onUpdate: () => void;
}

const EditProperty = ({ property, onClose, onUpdate }: EditPropertyProps) => {
  const [formData, setFormData] = useState({
    title: property.title,
    slug: property.slug,
    price: property.price,
    units: property.units,
    property_type: property.property_type,
    property_status: property.property_status,
    beds: property.beds,
    images: property.images,
    description: property.description,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/properties?id=${property.id}`, formData);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          {/* Repeat similar input fields for all other properties */}
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProperty;
