import { h1 } from 'framer-motion/client'
import React from 'react'
import { Toaster } from 'react-hot-toast';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
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
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-gray-800 font-medium hover:underline"
            >
              Register now
            </a>
          </p>
        </div>  
      </div>
    </div>
  );
};
   


export default SignIn;
