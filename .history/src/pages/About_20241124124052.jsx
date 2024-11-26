import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="about">
    <div className="about-header">
        <h2>Наша история</h2>
        <p>
            История о том, как наш бренд стал символом стиля, качества и заботы
            о каждом клиенте.
        </p>
    </div>
    <div className="about-container">
        <div className="about-card">
            <div className="icon">📅</div>
            <h3>Наше начало</h3>
            <p>
                В 2015 году мы начали с маленького магазина, чтобы предложить одежду,
                которая сочетает в себе комфорт и стиль.
            </p>
        </div>
        <div className="about-card">
            <div className="icon">✨</div>
            <h3>Вдохновение</h3>
            <p>
                Мы вдохновляемся вашими историями, создавая коллекции, которые
                отражают уникальность каждого человека.
            </p>
        </div>
        <div className="about-card">
            <div className="icon">🏆</div>
            <h3>Сегодня</h3>
            <p>
                Наш бренд стал популярным благодаря качеству и доступности. Мы
                гордимся доверием тысяч клиентов.
            </p>
        </div>
    </div>
</div>

    </>
  );
};

export default About;
