import React from 'react'
import { Button } from 'react-bootstrap'

function Hero() {
  return (
    <div id="hero">
       <div className="hero-section d-flex align-items-center justify-content-between p-5">
      <div className="hero-text">
        <h1>Delicious Bites, Delivered Fast</h1>
        <p>Your cravings deserve the best. Fresh ingredients, mouth-watering flavors, and quick service.</p>
        <Button variant="warning" size="lg">Explore Menu</Button>
      </div>
      <div className="hero-img">
        <img src="/hero-one.jpg" alt="hero" />
      </div>
  </div>
  </div>
  )
}

export default Hero
