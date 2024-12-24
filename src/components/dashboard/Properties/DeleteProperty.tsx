import axios from "axios";
import { Property } from "@/types/properties"; // Import Property type

interface DeletePropertyProps {
  property: Property; // Use Property type
  onClose: () => void;
  onDelete: () => void;
}

const DeleteProperty = ({
  property,
  onClose,
  onDelete,
}: DeletePropertyProps) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/properties?id=${property.id}`);
      onDelete();
      onClose();
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Are you sure you want to delete this property?
        </h2>
        <p>{property.title}</p>
        <div className="flex justify-between space-x-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white p-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProperty;
