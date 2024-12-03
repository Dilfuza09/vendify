import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import instance from "../axios";
import { faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const [minValue, setMinValue] = useState(0);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    instance.get('mahsulotlar').then(res => setProducts(res.data));
  }, []);

  const userDetails = id => {
    navigate(`info/${id}`)
  }


  return (
    <>
      <header className='header'>
        <div className="header-h1"><b><a href="/home">Vendify</a></b></div>
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
      <div className="home">
        <img className='home-image' src="https://thumb.tildacdn.com/tild3066-3936-4632-a234-396433303631/-/format/webp/4.png" alt="" />
        <img className='home-image' src="https://thumb.tildacdn.com/tild6566-3934-4561-b235-343237663134/-/format/webp/55.png" alt="" />
      </div>
      <div className="home-text">
        <div className="home-p">Nice things for casual life created to <br /> bring you joy of usage</div>
      </div>

      <div style={{ display: "flex", gap: "100px" }}>

        <div className="check">
          <div>
            <h6>Все</h6>
            <ul style={{ listStyle: "none" }}>
              <li>Clock</li>
              <li>Accessories</li>
              <li>Home</li>
            </ul>
          </div>
          <div>
            <h6>Price</h6>
            <div style={{ width: "100px", textAlign: "center" }}>
              <div style={{ alignItems: "center", display: "flex", width: "250px" }}>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={minValue}
                  onChange={(e) => setMinValue(e.target.value)}
                  style={{ marginRight: "10px", flex: 1 }}
                />

              </div>
            </div>
          </div>
          <div className="number">
            <input type="number" />
            <h1>-</h1>
            <input type="number" />
          </div>
          <div>
            <h6>Brand</h6>
            <ul style={{ listStyle: "none" }}>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />Elton</li>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />GeekCook</li>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />Immany</li>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />Lettuce Grow</li>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />Makao</li>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />Records</li>
            </ul>
          </div>
          <div>
            <h6>Availability</h6>
            <h6><input type="checkbox" />Только товары в наличии</h6>
          </div>
        </div>
        <div className="all" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            products.map(value => {
              return (
                <div key={value._id} style={{
                  padding: '20px',
                  margin: '10px',
                  textAlign: 'left',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                  <Link to={`info/${value._id}`}><img style={{ width: "300px" }} className="dr" src={value.img} /></Link>

                  <div style={{ justifyContent: 'space-between', marginTop: '10px', width: '100%' }}>
                    <h3 style={{ fontSize: "15px" }}>
                      <Link
                        to={`info/${value._id}`}
                        style={{ color: 'black', textDecoration: "none  " }}
                      >

                        {value.title}
                      </Link>
                    </h3>
                    <br /><br /><br />
                    <h3 style={{ fontSize: "15px" }}>  ${value.price} </h3>
                    <button onClick={() => userDetails(value._id)} style={{ marginLeft: '230px' }}>Info</button>

                  </div>
                </div>
              );
            })
          }
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
  )
}

export default Home;
