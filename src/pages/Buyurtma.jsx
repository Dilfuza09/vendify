import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import './buyurtma.css';

const Buyurtma = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Хук для навигации
  const { items, totalAmount } = location.state || { items: [], totalAmount: 0 };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: 'Ташкент',
    paymentMethod: 'cash',
    deliveryType: 'delivery',
    pickupLocation: '', // Added for pickup location
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 1);
    const formattedDate = deliveryDate.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    alert(`Ваш заказ принят! Доставка будет выполнена ${formattedDate}.`);
    
    // Перенаправление на главную страницу
    navigate('/home');
  };
  
  return (
    <div className="order-page">
      <div className="header1">
        <h1>Оформление заказа</h1>
      </div>

      <div className="order-content">
        <div className="order-summary">
          <h2>Ваш заказ</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <span>{item.title}</span>
                <span> x {item.quantity}</span>
                <span> ${item.total}</span>
              </li>
            ))}
          </ul>
          <div className="total">Общая сумма: ${totalAmount}</div>
        </div>

        <div className="delivery-method">
          <h2>Способ доставки</h2><br />
          <label>
            <input
              type="radio"
              name="deliveryType"
              value="delivery"
              checked={formData.deliveryType === 'delivery'}
              onChange={handleChange}
            />
            Доставка ($5)
          </label>
          <label>
            <input
              type="radio"
              name="deliveryType"
              value="pickup"
              checked={formData.deliveryType === 'pickup'}
              onChange={handleChange}
            />
            Самовывоз (бесплатно)
          </label>

          {formData.deliveryType === 'pickup' ? (
            <div className="pickup-info">
              <p>Выберите место самовывоза в Чиланзарском районе, Ташкент:</p>
              {/* Здесь можно добавить логику для выбора места самовывоза */}
            </div>
          ) : (
            <div className="delivery-address">
              <label>
                Адрес доставки:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Укажите ваш адрес"
                  className="input"
                />
              </label>
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn" style={{backgroundColor:'lightgray',color:'black',border:'1px solid gray'}} onClick={handleSubmit}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default Buyurtma;
