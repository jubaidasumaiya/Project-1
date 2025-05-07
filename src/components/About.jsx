import React from 'react'

function About() {
  return (
    <div id="about">
      <div className="about-section p-5" id="about">
      <div className="container d-flex flex-wrap align-items-center justify-content-between gap-5">
        <div className="about-text" style={{ maxWidth: '500px' }}>
          <h2>About Us</h2>
          <p>
            At Foodie Delight, we’re passionate about crafting the most delicious and satisfying meals using the freshest ingredients. From cheesy burgers to crispy fries, every bite is made with love and flavor.
          </p>
          <p>
            Whether you're ordering online or dining in, we promise fast service, great taste, and a smile. Thank you for making us your favorite comfort food stop!
          </p>
        </div>
        <div className="about-img">
          <img src="/Project-1/about-one.png" alt="About us" className="img-fluid rounded" style={{ maxWidth: '450px' }} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
