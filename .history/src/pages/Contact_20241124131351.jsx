import React, { useState } from "react";
const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
  };

  return (
    <div className={`wrapper centered ${sent ? "sent" : ""}`}>
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
            <button onClick={handleSend} id="sendLetter">Send</button>
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
