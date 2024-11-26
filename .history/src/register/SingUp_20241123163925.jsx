import React from 'react'

const SingUp = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && email) {
      setSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <>
      <small>Enter message (optional) and click button "Send"</small>
      <div className="wrapper centered">
        <article className="letter">
          <div className="side">
            <h1>Contact us</h1>
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="side">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button id="sendLetter" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </article>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
      </div>
      {submitted && (
        <p className="result-message centered">Thank you for your message</p>
      )}
    </>
  )
}

export default SingUp