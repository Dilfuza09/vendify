import { faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="header-h1">Vendify</div>
        <nav className='nav'>
          <a href="#sale">About</a>
          <a href="#sale">Sale %</a>  
          <a href="#">Contact</a>
          <a href="#"><FontAwesomeIcon icon={faUser} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </nav>

        <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </header>
    </>
  )
}

export default Header