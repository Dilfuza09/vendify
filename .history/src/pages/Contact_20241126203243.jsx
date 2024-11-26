import React, { useState } from "react";

const UniqueContactForm = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6">
      <div className="relative bg-white shadow-2xl rounded-3xl max-w-lg w-full p-10 overflow-hidden">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {["name", "email", "message"].map((field, index) => (
            <div key={index} className="relative">
              <input
                type={field === "message" ? "textarea" : field}
                name={field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Your Message"}
                className="peer w-full bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none placeholder-transparent text-lg pt-4 pb-1"
              />
              <label
                htmlFor={field}
                className="absolute left-0 text-gray-500 text-sm transition-all duration-300 transform peer-placeholder-shown:translate-y-6 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-gray-600"
              >
                {field === "name" ? "Name" : field === "email" ? "Email" : "Message"}
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-bold shadow-lg hover:opacity-90 transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-4 text-center text-green-500 font-medium animate-fade-in">
            Thank you! Your message has been sent.
          </div>
        )}

        {/* Декоративные градиенты */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500 to-green-400 rounded-full blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default UniqueContactForm;
