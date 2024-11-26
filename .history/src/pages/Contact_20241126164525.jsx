const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Свяжитесь с нами</h2>
        <form>
          <div className="form-group">
            <label htmlFor="user_name" className="form-label">Имя</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email" className="form-label">Email</label>
            <input
            style={{
              border:''
            }}
              type="email"
              id="user_email"
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
