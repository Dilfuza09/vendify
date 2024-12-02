import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {


  const { t, i18n } = useTranslation();

  

  const handleSelectChange = (e) => {
      e.preventDefault();
      const selectedLanguage = e.target.value
      console.log(selectedLanguage)
      i18n.changeLanguage(selectedLanguage)
  }
  return (
    <>
      <header className='header'>
        <div className="header-h1"><b><a href="/">Vendify</a></b></div>
        <nav className='nav'>
          <a href="/about">{t('Haqida')}</a>
          <a href="#sale">{t('Foiz')}</a>
          <a href="/Contact">{t('Kontakt')}</a>
          <div className="header-icon">
            <a href="#"><FontAwesomeIcon icon={faUser} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
          <select style={{ backgroundColor: "white", color: "black", padding: '5px 10px', borderRadius: "10px" }} onChange={handleSelectChange}>
            <option value="uz">O'zbek</option>
            <option value="en">English</option>
          </select>
        </nav>
      </header>
    </>
  )
}

export default Header