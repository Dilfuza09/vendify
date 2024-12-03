
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      toast.success("Signed in successfully!");
      setData({ email: "", password: "" });
    } else {
      toast.error("Please fill out all fields.");
    }
  };
import { h1 } from 'framer-motion/client'
import React from 'react'


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {/* Компонент Toaster */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-white shadow-lg rounded-lg max-w-sm w-full p-8 relative">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Sign In
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please enter your credentials to sign in.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter your email address"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ borderColor: '#A0AEC0' }}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-500 mb-2">
              Password
            </label>
            <motion.input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter your password"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ borderColor: '#A0AEC0' }}
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <a href="/register" className="text-gray-600 hover:underline">
                Create one here
              </a>
            </p>
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};
  
   


export default SignIn;
