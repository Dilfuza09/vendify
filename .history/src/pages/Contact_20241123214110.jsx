import React, { useState } from 'react';
import './App.css'; // Подключение стилей

const Contact = () => {
  const [isSent, setIsSent] = useState(false); // Состояние для анимации отправки

  const handleSubmit = () => {
    setIsSent(true); // Устанавливаем состояние, когда форма отправлена
  };

  return (
    <div className={`wrapper centered ${isSent ? 'sent' : ''}`}>
      <article className="letter">
        <div className="side">
          <h1>Contact us</h1>
          <p>
            <textarea placeholder="Your message"></textarea>
          </p>
        </div>
        <div className="side">
          <p>
            <input type="text" placeholder="Your name" />
          </p>
          <p>
            <input type="email" placeholder="Your email" />
          </p>
          <p>
            <button id="sendLetter" onClick={handleSubmit}>
              Send
            </button>
          </p>
        </div>
      </article>
      <div className="envelope front"></div>
      <div className="envelope back"></div>
      <p className="result-message centered">Thank you for your message</p>
    </div>
  );
};

export default Contact;
