import './Navbar.css'
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isAuth, setIsAuth] = useState(true);
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
                      Home
                    </Link>
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
                    <Link to="#" className="nav-link">
                      Blog
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link to="/about-us" className="nav-link">
                      About
                    </Link>
                  </li>
                  
                <li className="nav-item" >

                <div className="cart">
                  <Link to="/sign-in" className="nav-link toggle">
                    Sign-in <i className="fas fa-sign-in-alt " ></i>
                  </Link>
                </div>
                </li>
                </ul>
                {isAuth?null:
                <div className="cart">
                  <Link to="cart.html" className="cart-btn">
                    <i className="bx bx-cart"></i>
                    <span className="badge">0</span>
                  </Link>
                </div>
                }
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
