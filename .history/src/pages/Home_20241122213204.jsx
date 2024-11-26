import React from 'react'

const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home