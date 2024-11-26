import React, { useState } from "react";

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);
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
    setIsFlipped(true);
    setTimeout(() => {
      setIsFlipped(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] p-6">
      <div
        className={`relative w-full max-w-md h-[500px] perspective ${
          isFlipped ? "is-flipped" : ""
        }`}
      >
        {/* Front Page */}
        <div className="absolute w-full h-full bg-white shadow-md rounded-lg transform transition-transform duration-1000 backface-hidden">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mt-6">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-6 px-4">
            Have questions? Fill out the form and we’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 px-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm text-gray-700 mb-2"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:border-gray-400"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 mb-2"
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
        </div>

        {/* Back Page */}
        <div className="absolute w-full h-full bg-gray-50 shadow-md rounded-lg transform transition-transform duration-1000 rotate-y-180 backface-hidden flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600 text-center px-6">
            Your message has been sent successfully. We will get back to you
            soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
