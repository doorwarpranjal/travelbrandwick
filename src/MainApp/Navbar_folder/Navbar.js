import React from 'react'

export default function Navbar() {
    return (
     
            <div className="main-navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/img/logo1.png" alt="logo" />
                </a>
              </div>
              <div className="cart responsive">
                <a href="cart.html" className="cart-btn"><i className="bx bx-cart" />
                  <span className="badge">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo1.png" alt="Logo" />
              </a>
              <div className="collapse navbar-collapse mean-menu">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link active toggle">Home<i className="bx bxs-chevron-down" /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">Home Demo - 1</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link active">Home Demo - 2</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link">Home Demo - 3</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link toggle">Pages<i className="bx bxs-chevron-down" /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="team.html" className="nav-link">Team</a>
                      </li>
                      <li className="nav-item">
                        <a href="testimonials.html" className="nav-link">Testimonials</a>
                      </li>
                      <li className="nav-item">
                        <a href="booking.html" className="nav-link">Booking</a>
                      </li>
                      <li className="nav-item">
                        <a href="cart.html" className="nav-link">Cart</a>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">FAQ</a>
                      </li>
                      <li className="nav-item">
                        <a href="error-404.html" className="nav-link">404 Error</a>
                      </li>
                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                      </li>
                      <li className="nav-item">
                        <a href="login.html" className="nav-link">Login</a>
                      </li>
                      <li className="nav-item">
                        <a href="register.html" className="nav-link">Register</a>
                      </li>
                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                      </li>
                      <li className="nav-item">
                        <a href="terms-of-service.html" className="nav-link">Terms of Service</a>
                      </li>
                      <li className="nav-item">
                        <a href="forgot-password.html" className="nav-link">Forgot Password</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link toggle">Destinations<i className="bx bxs-chevron-down" /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="destinations.html" className="nav-link">Destinations</a>
                      </li>
                      <li className="nav-item">
                        <a href="destination-details.html" className="nav-link">Destinations Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item"><a href="#" className="nav-link toggle">Tours<i className="bx bxs-chevron-down" /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="tours.html" className="nav-link">Tours</a>
                      </li>
                      <li className="nav-item">
                        <a href="special-offers.html" className="nav-link">Trip Offers</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="about-us.html" className="nav-link">About</a>
                  </li>
                  <li className="nav-item"><a href="#" className="nav-link toggle">Blog<i className="bx bxs-chevron-down" /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog-style-1.html" className="nav-link">Blog Style One</a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-style-2.html" className="nav-link">Blog Style Two</a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-style-3.html" className="nav-link">Blog Style Three</a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-details.html" className="nav-link">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">Contact</a>
                  </li>
                </ul>
                <div className="cart">
                  <a href="cart.html" className="cart-btn"><i className="bx bx-cart" />
                    <span className="badge">0</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
        
    )
}
