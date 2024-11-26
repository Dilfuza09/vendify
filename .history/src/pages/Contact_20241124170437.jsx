import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
    toast.success('Ваше сообщение отправлено!', {
      position: 'top-center',
      duration: 3000,
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Свяжитесь с нами</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Сообщение</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
