import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const photos = [
    {
      id: 1,
      src: "https://via.placeholder.com/300",
      alt: "Описание 1",
      caption: "Наше качество — ваш комфорт",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/300",
      alt: "Описание 2",
      caption: "История бренда",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/300",
      alt: "Описание 3",
      caption: "Доверие клиентов — наша цель",
    },
  ];

  return (
    <section className="bg-gray-100 py-12" id="about">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          О нас
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="bg-white rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="mt-4 text-gray-700">{photo.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
