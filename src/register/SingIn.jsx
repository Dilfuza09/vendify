import React from 'react';
import { motion } from 'framer-motion';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6 border border-gray-200">
        <motion.h2
          className="text-2xl font-semibold text-gray-700 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sign In
        </motion.h2>
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              placeholder="Enter your email address"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/register" className="text-black">
                Create one here
              </a>
            </p>
          </div>
          {/* Sign In Button */}
          <motion.button
            type="submit"
            className="w-full py-3 bg-gray-700 text-white rounded-md font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Sign In
          </motion.button>
        </form>

        {/* Link to Registration Page */}

      </div>
    </div>
  );
};

export default SignIn;
