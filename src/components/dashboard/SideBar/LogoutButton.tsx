import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    router.push("/");
  };

  return (
    <div>
      <button
        className="w-full flex items-center py-2 px-3 rounded-md hover:bg-gray-700"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="mr-2" />
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
