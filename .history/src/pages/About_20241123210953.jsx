import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
      <section className="bg-gray-50 py-16" id="about">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
              Наша история
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Наш магазин был основан в 2015 году с простой целью — предложить
              людям качественную одежду, которая объединяет стиль, комфорт и
              доступность. Мы начинали как небольшой семейный бизнес, но с годами
              превратились в успешный бренд, которому доверяют тысячи клиентов.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Основное вдохновение мы черпаем из жизни наших клиентов, их
              потребностей и стремлений. Каждая коллекция создаётся с
              вниманием к деталям, чтобы удовлетворить разнообразные вкусы и
              подчеркнуть уникальность каждого человека.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Сегодня мы гордимся тем, что предлагаем широкий ассортимент
              женской, мужской и детской одежды, а также аксессуаров. Мы верим,
              что каждый заслуживает быть стильным и чувствовать себя уверенно
              каждый день.
            </p>
            <div className="text-center mt-8">
              <a
                href="#shop"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Перейти в каталог
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;
