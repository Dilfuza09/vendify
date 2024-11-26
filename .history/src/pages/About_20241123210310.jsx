import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gray-50 py-16" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Блок с текстом */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              О нашем магазине
            </h2>
            <p className="text-gray-600 mb-6">
              Мы предлагаем только качественные товары, созданные с заботой о
              наших клиентах. Наш магазин стремится сделать ваш шопинг удобным,
              быстрым и приятным.
            </p>
            <a
              href="#products"
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Узнать больше
            </a>
          </motion.div>

          {/* Блок с фотографиями */}
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://via.placeholder.com/200"
              alt="Фото 1"
              className="rounded-lg shadow-lg object-cover"
            />
            <img
              src="https://via.placeholder.com/200"
              alt="Фото 2"
              className="rounded-lg shadow-lg object-cover"
            />
            <img
              src="https://via.placeholder.com/200"
              alt="Фото 3"
              className="rounded-lg shadow-lg object-cover"
            />
            <img
              src="https://via.placeholder.com/200"
              alt="Фото 4"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
