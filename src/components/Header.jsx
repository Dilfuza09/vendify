import { faFacebook,  faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="header-h1"><b><a href="/">Vendify</a></b></div>
        <nav className='nav'>
          <a href="/about">About</a>
          <a href="#sale">Sale %</a>
          <a href="/Contact">Contact</a>
          <div className="header-icon">
            <a href="/signin"><FontAwesomeIcon icon={faUser} /></a>
            <a href="https://t.me/Vendify_shop_bot"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header