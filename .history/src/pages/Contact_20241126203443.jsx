import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9] p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-gray-500 text-center mb-8">
          We'd love to hear from you! Please fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-200 focus:border-pink-300"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-200 focus:border-pink-300"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-200 focus:border-pink-300 resize-none"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white rounded-md font-semibold hover:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-200"
          >
            Send Message
          </button>
        </form>

        {/* Submission Feedback */}
        {submitted && (
          <div className="mt-4 text-center text-pink-600 font-medium">
            Thank you! Your message has been sent.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
