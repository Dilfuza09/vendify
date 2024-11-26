import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast"; // Импорт Toast

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" }); // Очистить форму
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-6 border border-indigo-600">
      {/* Компонент Toaster */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-8 relative">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Have questions? Fill out the form and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:border-gray-400"
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:border-gray-400"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:border-gray-400 resize-none"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
          >
            Send Message
          </button>
        </form>

        {/* Декоративные элементы */}
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-200 rounded-full"></div>
        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gray-100 rounded-full"></div>
      </div>
    </div>
  );
};

export default Contact;
