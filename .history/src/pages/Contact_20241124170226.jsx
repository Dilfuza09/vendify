import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    setFormData({ name: '', email: '', message: '' });
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Сообщение</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
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
