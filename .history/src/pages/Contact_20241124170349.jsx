import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Свяжитесь с нами</h2>
        <form>
          <div className="form-group">
            <label className="form-label">Имя</label>
            <input type="text"/>
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email"/>
          </div>
          <div className="form-group">
            <label className="form-label">Сообщение</label>
            <textarea></textarea>
          </div>
          <button type="submit" className="form-button">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
