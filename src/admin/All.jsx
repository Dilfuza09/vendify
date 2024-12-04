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
      <div className="all">
        <h1 style={{ textAlign: 'center' }}>All Product</h1>
        <div className="all" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            products.map(value => {
              return (
                <div key={value._id} style={{ backgroundColor: 'aqua', padding: '20px', margin: '10px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <img src={value.img} alt='' style={{ borderRadius: '.5rem' }} />
                  <h3>Title: {value.title}</h3>
                  <h3> Price: {value.price} сум</h3>

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
    </>
  );
};

export default All;
