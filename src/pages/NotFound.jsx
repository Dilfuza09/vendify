import { faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NotFound = () => {
  return (
    <>
      <header className='header'>
        <div className="header-h1"><b><a href="/">Vendify</a></b></div>
        <nav className='nav'>
          <a href="/about">About</a>
          <a href="#sale">Sale %</a>
          <a href="/Contact">Contact</a>
          <div className="header-icon">
            <a href="https://t.me/Vendify_shop_bot"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </nav>
      </header>
      <div style={{
        textAlign: 'center',
        padding: '100px 0',
        backgroundColor: '#f7f7f7',
        fontFamily: 'Arial, sans-serif',
      }}>
        <h1 style={{ fontSize: '5em', color: '#333' }}>404</h1>
        <h2 style={{ color: '#666' }}>Oops! Page not found.</h2>
        <p style={{ color: '#888' }}>Sorry, the page you're looking for doesn't exist. Try checking the URL or go back to the homepage.</p>
        <a href="/home" style={{
          textDecoration: 'none',
          color: '#007BFF',
          fontSize: '1.2em',
        }}>Back to Home</a>
      </div>
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

export default NotFound