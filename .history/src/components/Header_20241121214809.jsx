import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
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
            <a href="#"><li><FontAwesomeIcon icon={faUser} />Войти</li></a>
            <FontAwesomeIcon 
  icon={faFacebookF}  
  style={{ 
    color: 'white', 
    backgroundColor: 'black', 
    borderRadius: '50%', 
    padding: '15px', 
    width: '40px', 
    height: '40px', 
    fontSize: '20px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }} 
/>

<FontAwesomeIcon 
  icon={faInstagram} 
  style={{
    color: 'white', 
    backgroundColor: 'black', 
    borderRadius: '50%', 
    padding: '15px', 
    // width: '40px', 
    height: '40px', 
    fontSize: '20px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }} 
/>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header