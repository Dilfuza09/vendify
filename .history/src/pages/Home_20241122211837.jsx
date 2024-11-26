import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем стили Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Подключаем JavaScript для Bootstrap

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img
            src="https://via.placeholder.com/800x400?text=First+Slide"
            className="d-block w-100"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className={`carousel-item ${index === 1 ? 'active' : ''}`}>
          <img
            src="https://via.placeholder.com/800x400?text=Second+Slide"
            className="d-block w-100"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className={`carousel-item ${index === 2 ? 'active' : ''}`}>
          <img
            src="https://via.placeholder.com/800x400?text=Third+Slide"
            className="d-block w-100"
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>

      {/* Кнопки навигации */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={() => setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1))}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={() => setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1))}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
