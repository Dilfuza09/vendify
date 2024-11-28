import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
const SingIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Registered Data:', formData);
    setTimeout(() => setSubmitted(false), 3000); 
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-8 relative">
        {/* Заголовок страницы */}
        <motion.h2
          className="text-4xl font-semibold text-gray-800 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Register
        </motion.h2>

        {/* Форма регистрации */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
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
              placeholder="Enter your name"
            />
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
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
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
          >
            <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:border-gray-400"
              placeholder="Enter your password"
            />
            <div style={{textAlign:'center',marginTop:'30px'}}>Not a remember?<a href="#">Singup now</a></div>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
          >
            Register
          </motion.button>
        </form>

        {/* Уведомление о регистрации */}
        {submitted && (
          <motion.div
            className="mt-4 text-center text-green-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Registration successful! Welcome aboard.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SingIn;
