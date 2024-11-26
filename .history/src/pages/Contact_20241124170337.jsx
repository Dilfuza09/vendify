import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
