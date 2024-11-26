import { faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="header-h1">Vendify</div>
        
          <a href="#">Contact</a>
          <a href="#">Sale</a>
          <a href="#"><FontAwesomeIcon icon={faUser}/>Login</a>
          <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
      </header>
    </>
  )
}

export default Header