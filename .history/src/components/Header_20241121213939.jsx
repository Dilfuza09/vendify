import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faSquare, faUser } from '@fortawesome/free-solid-svg-icons'
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
            <h1><FontAwesomeIcon icon={faSquareInstagram} style={{borderRadius:'100%'}}/></h1>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header