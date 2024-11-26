import React, { useState } from "react";

const UnusualContactForm = () => {
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
    <div className="relative min-h-screen bg-gradient-to-bl from-blue-900 via-purple-900 to-black overflow-hidden flex items-center justify-center">
      {/* Абстрактный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-60 h-60 bg-pink-500 rounded-full blur-xl opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-40 h-40 bg-blue-400 rounded-full blur-md opacity-50 animate-spin-slow"></div>
      </div>

      {/* Форма */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-8 rounded-3xl shadow-2xl backdrop-blur-md max-w-xl w-full transform hover:scale-105 transition duration-500">
        <h2 className="text-4xl font-extrabold text-white text-center mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-6 py-3 bg-transparent border-b-2 border-white focus:border-pink-500 text-lg outline-none placeholder-transparent"
            />
            <label className="absolute left-6 top-1 text-white text-sm group-hover:text-pink-300 transition-all">
              Your Name
            </label>
          </div>
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-6 py-3 bg-transparent border-b-2 border-white focus:border-blue-500 text-lg outline-none placeholder-transparent"
            />
            <label className="absolute left-6 top-1 text-white text-sm group-hover:text-blue-300 transition-all">
              Your Email
            </label>
          </div>
          <div className="relative group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full px-6 py-3 bg-transparent border-b-2 border-white focus:border-purple-500 text-lg outline-none placeholder-transparent resize-none"
            ></textarea>
            <label className="absolute left-6 top-1 text-white text-sm group-hover:text-purple-300 transition-all">
              Your Message
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full text-lg font-semibold hover:shadow-2xl transform transition duration-500"
          >
            Send Message
          </button>
        </form>
        {submitted && (
          <div className="mt-4 text-center text-green-300 font-semibold animate-fade-in">
            Thank you! We will get back to you shortly.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
