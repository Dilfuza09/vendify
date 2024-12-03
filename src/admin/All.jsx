import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axios";
import { faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const All = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    instance.get('mahsulotlar').then(res => setProducts(res.data));
  }, []);
  const editproduct = (id) => {
    navigate(`/edit/${id}`);
  };

  const deleteProduct = (id) => {
    instance.delete(`mahsulotlar/${id}`).then(() => {
      const updatedProducts = products.filter(product => product._id !== id);
      setProducts(updatedProducts);
    });
  };




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
      <div className="all">
        <h1 style={{ textAlign: 'center' }}>All Product</h1>
        <div className="all" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            products.map(value => {
              return (
                <div key={value._id} style={{ border:'1px solid black',borderRadius:'25px', padding: '20px', margin: '10px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <img src={value.img} alt='' style={{ borderRadius: '.5rem',width:'270px' }} />
                  <h3><b>Title: {value.title}</b></h3>
                  <h3> <b>Price: {value.price} сум</b></h3>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', width: '100%' }}>
                    <button onClick={() => editproduct(value._id)}>Edit</button>
                    <button onClick={() => deleteProduct(value._id)}>Delete</button>
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
  );
};

export default All;
