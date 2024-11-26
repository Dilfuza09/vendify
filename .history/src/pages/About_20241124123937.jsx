import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-header">
          <h2>Наша история</h2>
          <p>Узнайте, как мы превратились в успешный бренд</p>
        </div>
        <div className="about-container">
          <div className="about-card">
            <h3>Наше начало</h3>
            <p>
              В 2015 году мы начали как небольшой семейный бизнес, чтобы предложить
              качественную одежду для всех.
            </p>
          </div>
          <div className="about-card">
            <h3>Вдохновение</h3>
            <p>
              Наше вдохновение — жизнь наших клиентов. Мы создаём коллекции с
              вниманием к деталям и уникальным стилем.
            </p>
          </div>
          <div className="about-card">
            <h3>Сегодня</h3>
            <p>
              Мы гордимся тем, что наш бренд ассоциируется с качеством,
              доступностью и стилем для всей семьи.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
