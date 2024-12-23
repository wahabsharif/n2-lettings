"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/slices/authSlice";
import { FaShieldAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const ClipLoader = dynamic(
  () => import("react-spinners").then((mod) => mod.ClipLoader),
  { ssr: false }
);
const Toaster = dynamic(
  () => import("react-hot-toast").then((mod) => mod.Toaster),
  { ssr: false }
);

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/login", {
        username,
        password,
      });

      if (response.data.success) {
        const { token, user } = response.data;

        dispatch(
          setCredentials({
            ...user,
            token,
          })
        );

        toast.success(
          <div className="flex items-center">
            <div className="mr-3">
              <Image
                className="h-10 w-10 rounded-full"
                src="/images/blue-circle-with-white-user.avif"
                alt="user"
                width={500}
                height={500}
              />
            </div>
            <div>
              <p className="font-medium text-gray-900">
                {user.first_name} {user.last_name}
              </p>
              <p className="text-sm text-gray-500">Welcome Back!</p>
            </div>
          </div>,
          { position: "top-right", duration: 4000 }
        );

        router.push("/dash");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid username or password, please try again.", {
        position: "top-right",
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900/50 p-10 backdrop-blur-lg rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center flex justify-center items-center mb-6 text-gray-100">
          <FaShieldAlt className="mx-2" /> Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())} // Convert input to lowercase
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white bg-gray-800"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-100">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white bg-gray-800"
            />
          </div>

          {loading ? (
            <div className="flex justify-center mb-4">
              <ClipLoader size={30} color="#34D399" loading={loading} />
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              type="submit"
              className="w-full p-2 uppercase border-2 font-madenz border-thLightGreen rounded-tr-lg rounded-br-2xl bg-thLightGreen text-white hover:bg-gray-900 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-thLightGreen focus:ring-offset-2"
            >
              Login
            </motion.button>
          )}
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default dynamic(() => Promise.resolve(LoginForm), { ssr: false });
