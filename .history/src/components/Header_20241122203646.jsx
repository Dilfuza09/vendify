import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="header-h1">Vendify</div>
        <div className="header-ul">
          <ul>
            <a href="#"><li>Contact</li></a>
            <a href="#"><li>Sale</li></a>
            <a href="#"><li><FontAwesomeIcon icon={faUser} />Войти</li></a>
          </ul>
          <a href="#"></a>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{
              color: 'white',
              backgroundColor: 'black',
              borderRadius: '50%',
              padding: '5px',
              width: '10px',
              height: '10px',
              fontSize: '20px',
            }}
            />
            </div>        
      </header>
    </>
  )
}

export default Header