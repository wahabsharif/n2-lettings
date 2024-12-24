import { useState, useEffect } from "react";
import axios from "axios";
import { Property } from "@/types/properties";
import Image from "next/image";
import { TiTimes } from "react-icons/ti";

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
    baths: property.baths,
    images: property.images,
    description: property.description,
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // Auto-generate slug when title changes
  useEffect(() => {
    if (formData.title) {
      // If title exists, generate slug
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^[-]+|[-]+$/g, ""); // Creates a slug-friendly string
      setFormData((prevState) => ({
        ...prevState,
        slug: generatedSlug,
      }));
    } else {
      // If title is cleared, clear the slug as well
      setFormData((prevState) => ({
        ...prevState,
        slug: "", // Clear the slug when title is cleared
      }));
    }
  }, [formData.title]);

  // Set image previews if there are existing images
  useEffect(() => {
    if (property.images && property.images.length > 0) {
      setImagePreviews(property.images);
    }
  }, [property.images]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData((prevState) => ({
        ...prevState,
        images: [...prevState.images, ...newFiles.map((file) => file.name)],
      }));

      const filePreviews = newFiles.map((file) => URL.createObjectURL(file));
      setImagePreviews((prevPreviews) => [...prevPreviews, ...filePreviews]);
    }
  };

  const handleImageRemove = (index: number) => {
    const newImagePreviews = imagePreviews.filter((_, i) => i !== index);
    setImagePreviews(newImagePreviews);
    setFormData((prevState) => ({
      ...prevState,
      images: prevState.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        formData.images.forEach((file) => {
          formDataToSend.append("images", file);
        });
      } else {
        formDataToSend.append(
          key,
          formData[key as keyof typeof formData].toString()
        );
      }
    });

    try {
      await axios.patch(`/api/properties?id=${property.id}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800/50 backdrop-blur-md bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-auto">
        <h2 className="text-xl font-semibold text-center">Edit Property</h2>
        <form onSubmit={handleSubmit} className="text-md">
          <div className="my-2">
            <label className="block">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border px-2 py-1 rounded-md w-full"
            />
          </div>
          <div className="my-2">
            <label className="block">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="border px-2 py-1 rounded-md w-full bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="my-2 flex space-x-1">
            <div className="w-1/2">
              <label className="block">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border px-2 py-1 rounded-md w-full"
              />
            </div>
            <div className="w-1/2">
              <label className="block">Units</label>
              <input
                type="text"
                name="units"
                value={formData.units}
                onChange={handleChange}
                className="border px-2 py-1 rounded-md w-full"
              />
            </div>
          </div>
          <div className="my-2 flex space-x-1">
            <div className="w-1/2">
              <label className="block">Property Type</label>
              <input
                type="text"
                name="property_type"
                value={formData.property_type}
                onChange={handleChange}
                className="border px-2 py-1 rounded-md w-full"
              />
            </div>
            <div className="w-1/2">
              <label className="block">Property Status</label>
              <input
                type="text"
                name="property_status"
                value={formData.property_status}
                onChange={handleChange}
                className="border px-2 py-1 rounded-md w-full"
              />
            </div>
          </div>
          <div className="my-2 flex space-x-1">
            <div className="w-1/2">
              <label className="block">Beds</label>
              <input
                type="number"
                name="beds"
                value={formData.beds}
                onChange={handleChange}
                className="border px-2 py-1 rounded-md w-full"
              />
            </div>
            <div className="w-1/2">
              <label className="block">Baths</label>
              <input
                type="number"
                name="baths"
                value={formData.baths}
                onChange={handleChange}
                className="border px-2 py-1 rounded-md w-full"
              />
            </div>
          </div>

          <div className="my-2">
            <label className="block">Images</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
            />
            <div className="my-4 flex space-x-4">
              {imagePreviews.map((image, index) => (
                <div key={index} className="relative">
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={`preview-${index}`}
                    className="w-28 h-28 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleImageRemove(index)}
                    className="absolute top-[-10px] z-10 right-[-10px] bg-red-500 text-white rounded-full p-1"
                  >
                    <TiTimes />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="my-2">
            <label className="block">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="border px-2 py-1 rounded-md w-full"
            />
          </div>
          <div className="my-2 flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white text-sm px-2 py-1 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 px-2 py-1 text-sm text-white rounded"
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
