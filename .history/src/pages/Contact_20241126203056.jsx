import React, { useState } from "react";

const ContactForm = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Contact Us
        </h2>
        <hr className="mb-6 border-gray-300" />
        <p className="text-gray-600 text-center mb-6">
          Have questions? Fill out the form below and we'll respond promptly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <label
              htmlFor="name"
              className="block text-sm text-gray-700 mb-2 transition-all group-hover:text-gray-900"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400 focus:border-gray-500 transition-all"
            />
          </div>

          <div className="relative group">
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 mb-2 transition-all group-hover:text-gray-900"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400 focus:border-gray-500 transition-all"
            />
          </div>

          <div className="relative group">
            <label
              htmlFor="message"
              className="block text-sm text-gray-700 mb-2 transition-all group-hover:text-gray-900"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400 focus:border-gray-500 transition-all resize-none"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400 transition-all"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-4 text-center text-green-600 font-medium animate-fade-in">
            Thank you! Your message has been sent.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
