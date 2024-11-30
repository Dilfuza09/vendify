import {  faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="footer2">
          <div className="footer-icon">
            <a href="https://t.me/Vendify_shop_bot"><FontAwesomeIcon icon={faTelegram} /></a>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="footer-text">Also follow us in social networks and visit <br /> our showroom in Bruxelles.</div>
          <div className="footer-tell">
            Rue Montagne du Parc 4. Bruxelles <br />
            Phone: +123 235 346 457
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer