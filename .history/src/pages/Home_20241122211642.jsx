import { Carousel } from 'bootstrap';
import React, { useState } from 'react'
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        </Carousel.Item>
        <Carousel.Item>
        </Carousel.Item>
        <Carousel.Item>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home