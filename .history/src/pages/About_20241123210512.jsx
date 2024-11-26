import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-16" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Левая сторона: текст */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Стиль и качество
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Добро пожаловать в наш магазин одежды, где стиль и качество идут
              рука об руку. Мы гордимся тем, что предоставляем трендовые
              коллекции для тех, кто ценит моду и комфорт.
            </p>
            <a
              href="#shop"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Узнать больше
            </a>
          </motion.div>

          {/* Правая сторона: фотографии */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <img
                src="https://via.placeholder.com/300x400?text=Женская+одежда"
                alt="Женская одежда"
                className="rounded-lg shadow-lg object-cover w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold">Коллекция 2024</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://via.placeholder.com/300x400?text=Мужская+одежда"
                alt="Мужская одежда"
                className="rounded-lg shadow-lg object-cover w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold">Новинки сезона</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://via.placeholder.com/300x400?text=Аксессуары"
                alt="Аксессуары"
                className="rounded-lg shadow-lg object-cover w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold">Для любого случая</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://via.placeholder.com/300x400?text=Детская+одежда"
                alt="Детская одежда"
                className="rounded-lg shadow-lg object-cover w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold">Детские коллекции</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
