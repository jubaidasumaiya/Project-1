import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="footer-section text-white pt-5 pb-3">
      <div className="container d-flex flex-wrap justify-content-between gap-4">
        
        <div>
          <h4>Foodie Delight</h4>
          <p>Serving joy in every bite. Fast, fresh, and flavorful.</p>
        </div>

        <div>
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#hero">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </div>

        <div>
          <h5>Contact Us</h5>
          <p>Email: contact@foodiedelight.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <small>&copy; 2025 Foodie Delight. All rights reserved.</small>
      </div>
    </footer>

    </div>
  )
}

export default Footer
