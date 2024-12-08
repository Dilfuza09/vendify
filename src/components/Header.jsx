import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faCartArrowDown, faUser } from '@fortawesome/free-solid-svg-icons'
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
                <div className="header-h1"><b><a href="/home">Vendify</a></b></div>
                <nav className='nav'>
                    <a href="/about">{t('Haqida')}</a>
                    <a href="#">{t('Foiz')} %</a>
                    <a href="/Contact">{t('Kontakt')}</a>
                    <div className="header-icon">
                        <a href="/korzinka"><FontAwesomeIcon icon={faCartArrowDown} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>

                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                    <select style={{ backgroundColor: "white", color: "black", padding: '5px 10px', borderRadius: "10px" }} onChange={handleSelectChange}>
                        <option value="en">English</option>
                        <option value="uz">O'zbek</option>
                    </select>
                </nav>
            </header>
        </>
    )
}

export default Header