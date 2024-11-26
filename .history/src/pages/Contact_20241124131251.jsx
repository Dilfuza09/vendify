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
          <div className="contact-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="contact-map">
            <h2>Map</h2>
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=40.7128,-74.0060&zoom=13&size=600x400&maptype=roadmap&markers=color:red%7Clabel:S%7C40.7128,-74.0060" alt="Map" />
            <p>View larger map</p>
            <div className="contact-phone">
              <h2>Phone</h2>
              <p>+123 235 346 457</p>
              <p>Call us now</p>
              <p>For more information, please call us directly.</p>
              
  <div className="contact-info"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact