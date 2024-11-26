import { faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="header-h1">Vendify</div>
        <div className="header-ul">
          {/* <ul>
            <a href="#"><li>Contact</li></a>
            <a href="#"><li>Sale</li></a>
            <a href="#"><li><FontAwesomeIcon icon={faUser} />Войти</li></a>
          </ul> */}
          <a href="#">Contact</a>
          <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
        </div>
      </header>
    </>
  )
}

export default Header