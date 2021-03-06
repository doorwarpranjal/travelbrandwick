//import './Home.css'
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <section id="hero-navbar">
      <div className="main-navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <Link to="/">
                  <img src="assets/img/logo1.png" alt="logo" />
                </Link>
              </div>
              <div className="cart responsive">
                <Link to="/cart" className="cart-btn">
                  <i className="bx bx-cart"></i>
                  <span className="badge">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="/">
                <img src="assets/img/logo1.png" alt="Logo" />
              </Link>
              <div className="collapse navbar-collapse mean-menu">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active toggle">
                      Home<i className="bx bxs-chevron-down"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link toggle">
                      Pages<i className="bx bxs-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/team" className="nav-link">
                          Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/testimonials" className="nav-link">
                          Testimonials
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/booking" className="nav-link">
                          Booking
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                          Cart
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/faq" className="nav-link">
                          FAQ
                        </Link>
                      </li>
                      
                      <li className="nav-item">
                        <Link to="coming-soon.html" className="nav-link">
                          Coming Soon
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className="nav-link">
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/register" className="nav-link">
                          Register
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/privacy-policy" className="nav-link">
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/terms-of-service" className="nav-link">
                          Terms of Service
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/forgot-password" className="nav-link">
                          Forgot Password
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link toggle">
                      Destinations<i className="bx bxs-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/destinations" className="nav-link">
                          Destinations
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/destination-details" className="nav-link">
                          Destinations Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link toggle">
                      Tours<i className="bx bxs-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/tours" className="nav-link">
                          Tours
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/special-offers" className="nav-link">
                          Trip Offers
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/about-us" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      Blog
                    </Link>
                 </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="cart">
                  <Link to="cart.html" className="cart-btn">
                    <i className="bx bx-cart"></i>
                    <span className="badge">0</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
