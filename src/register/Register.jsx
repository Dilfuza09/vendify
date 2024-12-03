import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = { email, password, name };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Registration successful! You can now sign in.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white shadow-lg rounded-lg max-w-md w-full p-8 border border-gray-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-3xl font-semibold text-gray-800 text-center mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Join <span className="text-gray-600">Vendify</span>
        </motion.h2>
        <motion.p
          className="text-sm text-gray-400 text-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Create your account and start exploring!
        </motion.p>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="Name" className="block text-sm font-medium text-gray-500 mb-2">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter your name"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ borderColor: '#A0AEC0' }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2">
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter your email address"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ borderColor: '#A0AEC0' }}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-500 mb-2">
              Password
            </label>
            <motion.input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Create a password"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ borderColor: '#A0AEC0' }}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <a href="/" className="text-gray-600 hover:underline">
              Sign in here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
