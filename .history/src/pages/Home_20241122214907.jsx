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


      <div className="home-content">
        <h1>Welcome to Vendify!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nunc et semper feugiat,
          felis nunc egestas ligula, ac facilisis velit ligula non urna. Vestibulum tincidunt, justo vel ultricies
          ullamcorper, dui felis pulvinar arcu, at sagittis nunc arcu euismod neque.
        </p>
      </div>
    </>
  )
}

export default Home