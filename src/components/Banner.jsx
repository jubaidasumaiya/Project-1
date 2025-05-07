import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const banner = () => {
  return (
    <>
      <section className="banner mt-5">
      <Carousel>
      <Carousel.Item>
      <img src="/Project-1/banner-one.jpg" alt="banner" style={{ width: '100%', height: '600px' }} />
        <Carousel.Caption>
          <h3>Enjoy Your Meal</h3>
          <p>Everything you got at one place</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/Project-1/banner-two.jpg" alt="banner" style={{ width: '100%', height: '600px' }} />
        <Carousel.Caption>
          <h3>Enjoy Your Meal</h3>
          <p>Everything you got at one place.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/Project-1/banner-three.jpg" alt="banner" style={{ width: '100%', height: '600px' }} />
        <Carousel.Caption>
          <h3>Enjoy Your Meal</h3>
          <p>
          Everything you got at one place
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </section>
          </>
  )
}

export default banner
