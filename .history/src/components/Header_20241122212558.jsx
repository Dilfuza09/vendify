import { faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="header-h1">Vendify</div>
        <nav className='nav'>
          <a href="#sale">About</a>
          <a href="#sale">Sale %</a>
          <a href="#">Contact</a>
          <div className="header-icon">
            <a href="#"><FontAwesomeIcon icon={faUser} /></a>
            <a href="#" style={{ gap: '20px' }}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" style={{ gap: '20px' }}><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header