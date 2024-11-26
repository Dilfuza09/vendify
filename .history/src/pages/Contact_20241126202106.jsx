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
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">
          We would love to hear from you! Fill out the form below to get in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 text-gray-800 bg-gray-100"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500 text-gray-800 bg-gray-100"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full h-32 px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-pink-500 text-gray-800 bg-gray-100 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-lg font-semibold transform transition hover:scale-105 shadow-md hover:shadow-xl"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            Thank you for contacting us! We'll get back to you shortly.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
