import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');
    if (email === 'iroda6638@gmail.com' && password === '1234') {
      navigate('/all');
    } else {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData && userData.email === email && userData.password === password) {
        navigate('/home');
      } else {
        setError('Invalid email or password');
      }
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white shadow-lg rounded-lg max-w-md w-full p-8 border border-gray-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-3xl font-semibold text-gray-800 text-center mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-gray-600">Vendify</span>
        </motion.h1>
        <motion.p
          className="text-sm text-gray-400 text-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Sign in to explore the best products just for you!
        </motion.p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignIn} className="space-y-6">
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
              className={`w-full px-4 py-3 rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500`}
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
              className={`w-full px-4 py-3 rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500`}
              placeholder="Enter your password"
              whileFocus={{ scale: 1.02 }}
              whileHover={{ borderColor: '#A0AEC0' }}
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <a href="/register" className="text-gray-600 hover:underline">
                Create one here
              </a>
            </p>
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignIn;
