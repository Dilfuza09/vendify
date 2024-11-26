import React from 'react'

const SingUp = () => {
  function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);
  return (
    <div>
      <small>Enter message (optional) and click button "Send"</small>
      <div className="wrapper centered">
        <article className="letter">
          <div className="side">
            <h1>Contact us</h1>
            <textarea placeholder="Your message"></textarea>
          </div>
          <div className="side">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <button id="sendLetter">Send</button>
          </div>
        </article>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
      </div>
      <p className="result-message centered">Thank you for your message</p>
    </div>
  )
}

export default SingUp