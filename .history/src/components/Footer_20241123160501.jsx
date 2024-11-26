import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Icons */}
        <div className="footer-icon flex space-x-4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500" />
          </a>
        </div>

        {/* Text */}
        <div className="footer-text text-center md:text-left">
          Also follow us on social networks and visit <br /> our showroom in Bruxelles.
        </div>

        {/* Contact */}
        <div className="footer-tell text-center md:text-right">
          Rue Montagne du Parc 4, Bruxelles <br />
          Phone: +123 235 346 457
        </div>
      </div>
    </footer>
  );
};

export default Footer;
