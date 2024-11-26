import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16 px-6 sm:px-12 md:px-20">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Vendify
        </motion.h2>
        <motion.p
          className="text-lg leading-7 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Vendify is your ultimate solution for streamlined e-commerce. Our mission
          is to empower businesses with seamless, user-friendly tools for selling
          products online and reaching global markets effortlessly.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
