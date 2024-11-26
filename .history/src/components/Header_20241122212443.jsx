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
          <a href="#" style={{gap:'100px'}}><FontAwesomeIcon icon={faUser} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header