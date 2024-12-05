import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axios";

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
      <div className="create-button" style={{ textAlign: 'center', margin: '20px 0' }}>
        <button
          style={{
            border: 'none',
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          <a href="/create" style={{ color: 'white', textDecoration: 'none' }}>+ Create Product</a>
        </button>
      </div>
      <div className="all"><br />
        <h1 style={{ textAlign: 'center' }}>All Product</h1>
        <div className="all" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            products.map(value => {
              return (
                <div key={value._id} style={{ padding: '20px', margin: '10px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <img src={value.img} alt='' style={{ borderRadius: '.5rem', width: '300px' }} /> <br />
                  <h3>Title: {value.title}</h3>
                  <h3> Price: ${value.price}</h3>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', width: '100%' }}>
                    <button
                      onClick={() => editproduct(value._id)}
                      style={{
                        backgroundColor: '#FFC107',
                        color: 'white',
                        border: 'none',
                        padding: '8px 15px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(value._id)}
                      style={{
                        backgroundColor: '#DC3545',
                        color: 'white',
                        border: 'none',
                        padding: '8px 15px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          }
        </div><br />
      </div>
    </>
  );
};

export default All;
