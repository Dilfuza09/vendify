import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <div className="footer-icon"><FontAwesomeIcon icon={faFacebook}/></div>
        <div className="footer-text">Also follow us in social networks and visit <br /> our showroom in Bruxelles.</div>
        <div className="footer-tell">
        Rue Montagne du Parc 4. Bruxelles <br />
        Phone: +123 235 346 457
        </div>
    </footer>
    </>
  )
}

export default Footer