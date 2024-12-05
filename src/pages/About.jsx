import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <>
      
      <div className="min-h-screen bg-[#F5F5F5] p-6 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg max-w-4xl w-full p-8 relative">
          <motion.h2
            className="text-4xl font-semibold text-gray-800 text-center mb-6 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Welcome to our world of creativity and innovation. We believe in providing
            the best solutions to our users through simple, efficient, and beautiful
            designs. Our team is dedicated to making your experience smooth and
            memorable.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src="about300.png"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                Our mission is to deliver an exceptional user experience while
                making technology accessible for everyone. We aim to help you achieve
                your goals and dreams with our products and services.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h3>
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full shadow-md mb-2"
                />
                <h4 className="text-lg font-medium text-gray-800">Iroda</h4>
                <p className="text-sm text-gray-600">CEO & Founder</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="Dilfuza.png"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full shadow-md mb-2"
                />
                <h4 className="text-lg font-medium text-gray-800">Dilfuza</h4>
                <p className="text-sm text-gray-600">Lead Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </>
  );
};

export default About;
