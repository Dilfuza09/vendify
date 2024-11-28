import React from 'react';

const SignUp = () => {
  return (
    <div className="singup">
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
        <div
          className="bg-white shadow-lg rounded-3xl max-w-md w-full p-6 border border-gray-100"
          style={{ padding: '50px' }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Sign Up
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-gray-50"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-gray-50"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-gray-50"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
