import React, { useState } from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="4" cols="50" />
          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          
        </div>
      </div>
    </>
  )
}

export default Contact