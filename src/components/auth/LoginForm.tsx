"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy credentials for login
    const dummyUsername = "user";
    const dummyPassword = "pass";

    if (username === dummyUsername && password === dummyPassword) {
      // Redirect to /dash upon successful login
      router.push("/dash");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
