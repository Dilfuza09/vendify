import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <div className="header-h1">
          <h1>Vendify</h1>
        </div>
        <div className="header-ul">
          <ul>
            <a href="#"><li>Contact</li></a>
            <a href="#"><li>Sale</li></a>
            <a href="#"><li><FontAwesomeIcon icon={faUser}/>Войти</li></a>
            <FontAwesomeIcon icon={faface}/>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header