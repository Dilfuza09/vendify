import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] p-6">
      {/* Заголовок с анимацией */}
      <motion.h2
        className="text-4xl font-semibold text-gray-800 text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h2>

      {/* Изображение с анимацией */}
      <motion.img
        src="https://your-image-link.jpg" // Замените на ссылку на ваше изображение
        alt="About Us"
        className="rounded-full shadow-lg w-40 h-40 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Текстовое описание */}
      <div className="text-center text-gray-600 max-w-lg mx-auto">
        <p>
          We are a passionate team dedicated to delivering the best products and services. Our mission is to create experiences that inspire and engage people from all walks of life. Join us in shaping the future of innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
