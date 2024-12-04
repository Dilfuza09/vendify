import { faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NotFound = () => {
  return (
    <>
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
    </>
  )
}

export default NotFound