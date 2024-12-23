"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { FaUser, FaHome, FaCog } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import LogoutButton from "./LogoutButton";

const SideBar = () => {
  // Type the `useSelector` to infer the state structure
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <aside className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700 flex items-center">
        <div className="mr-3">
          <div className="h-12 w-12 bg-blue-600 flex items-center justify-center rounded-full">
            <FaUser className="text-white text-2xl" />
          </div>
        </div>
        <div>
          <p className="text-lg font-bold">
            {user?.first_name} {user?.last_name}
          </p>
          <p className="text-sm text-gray-400">{user?.role}</p>
        </div>
      </div>

      {/* Links */}
      <div className="flex-1 p-4 space-y-2">
        <Link
          href="/dash"
          className="flex py-1 px-3 rounded-md hover:bg-gray-700 items-center"
        >
          <MdSpaceDashboard className="mr-2 text-xl" />
          Dashboard
        </Link>
        <Link
          href="/dash/properties"
          className="flex py-1 px-3 rounded-md hover:bg-gray-700 items-center"
        >
          <FaHome className="mr-2 text-xl" />
          Properties
        </Link>
      </div>

      {/* Bottom Buttons */}
      <div className="p-4 border-t border-gray-700">
        <button
          className="w-full mt-2 flex items-center py-2 px-3 rounded-md hover:bg-gray-700"
          onClick={() => {
            console.log("Settings clicked");
          }}
        >
          <FaCog className="mr-2" />
          Settings
        </button>
        <LogoutButton />
      </div>
    </aside>
  );
};

export default SideBar;
