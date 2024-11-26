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
          <h2>Contact Information</h2>
          <p>Rue Montagne du Parc 4. Bruxelles</p>
          <p>Phone: +123 235 346 457</p>
          <p>Email:  info@example.com</p>
          <p>Working Hours: Mon-Fri 8:00 AM - 5:00 PM</p>
          
        </div>
      </div>
    </>
  )
}

export default Contact