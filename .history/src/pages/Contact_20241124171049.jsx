import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  emailjs
  .sendForm('service_9ou4xwc', 'template_yourtemplate', form.current, {
    publicKey: 'abc123XYZ',  // новый публичный ключ
  })
  .then(
    () => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    },
  );

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Свяжитесь с нами</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Имя</label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Сообщение</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
