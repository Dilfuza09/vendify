import React from 'react'
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      {/* <center>
      <div className="carousel-container">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="slide"
              src="https://cakelab.uz/uploads/sliders/slider_1707995790.png"
              alt="Первый слайд"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide"
              src="https://cakelab.uz/uploads/sliders/slider_1707995683.png"
              alt="Второй слайд"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide"
              src="https://cakelab.uz/uploads/sliders/slider_1707995643.png"
              alt="Третий слайд"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide"
              src="https://cakelab.uz/uploads/sliders/slider_1707995757.png"
              alt="Четвертый слайд"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide"
              src="https://cakelab.uz/uploads/sliders/slider_1666180144.png"
              alt="Пятый слайд"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      </center> */}
      <div className="app">
      {/* Левая часть */}
      <div className="section">
        <div className="clock-container">
          <div className="line"></div>
          <div className="clock">
            <span className="time">12:45</span>
          </div>
        </div>
      </div>

      {/* Правая часть */}
      <div className="section table-setup">
        <table className="dining-table">
          <tbody>
            <tr>
              <td className="vase">
                <div className="red-berries"></div>
              </td>
              <td className="candles">
                <div className="candlestick"></div>
                <div className="candlestick lit"></div>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div class="utensils + utensils Basic"></div>
    </>
  )
}

export default Home