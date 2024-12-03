import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import instance from '../axios';
import { faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Info = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await instance.get(`/mahsulotlar/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <>
      <header className='header'>
        <div className="header-h1"><b><a href="/">Vendify</a></b></div>
        <nav className='nav'>
          <a href="/about">About</a>
          <a href="#sale">Sale %</a>
          <a href="/Contact">Contact</a>
          <div className="header-icon">
            <a href="https://t.me/Vendify_shop_bot"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </nav>
      </header>
      <div className="info-container" style={styles.container}>
        <div className="product-info" style={styles.productInfo}>
          <div className="product-image" style={styles.imageContainer}>
            {user.img && (
              <img src={user.img} alt={user.title} style={styles.image} />
            )}
          </div>
          <div className="product-details" style={styles.details}>
            <h2 style={styles.title}>{user.title}</h2>
            <h3 style={styles.price}>{user.price} сум</h3>
            <Button variant="secondary" as={Link} to="/" style={styles.backButton}>Назад</Button>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className="footer2">
          <div className="footer-icon">
            <a href="https://t.me/Vendify_shop_bot"><FontAwesomeIcon icon={faTelegram} /></a>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="footer-text">Also follow us in social networks and visit <br /> our showroom in Bruxelles.</div>
          <div className="footer-tell">
            Rue Montagne du Parc 4. Bruxelles <br />
            Phone: +123 235 346 457
          </div>
        </div>
      </footer>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
  },
  productInfo: {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    maxWidth: '1200px',
    width: '100%',
    textAlign: 'left',
  },
  imageContainer: {
    flex: '1',
    minWidth: '50%',
    maxHeight: '500px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    flex: '1',
    textAlign: 'center',
    marginTop: '120px',
    padding: '40px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  price: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  backButton: {
    marginTop: '20px',
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
    fontSize: '1rem',
  }
};

export default Info;
