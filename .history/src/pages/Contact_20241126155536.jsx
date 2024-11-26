const Contact = () => {
  return (
    <div className="contact-container">
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
        <button type="submit" className="form-button">Отправить</button>
      </form>
    </div>
  );
};

export default Contact;
