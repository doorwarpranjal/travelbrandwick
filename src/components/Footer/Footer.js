
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Navbar/logo1.png";
import "../Navbar/Navbar.css";

export default function Footer() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <section id="hero-footer">
      <footer class="footer-area">
        <div class="container">
          <div class="footer-top pt-100 pb-70 m-auto">
            <div class="row m-auto">
              <div class="col-lg-4  col-sm-6 col-12">
                <div class="footer-widget">
                  <div class="navbar-brand">
                    <div >
                      <a href="/">
                        <img
                          src={Logo}
                          style={{ width: "10px !important" }}
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                  <p>
                    You can dream, create, design, and build the most wonderful
                    place.
                  </p>
                </div>
              </div>
             <div className="col-lg-4  col-sm-6 col-12" style={{cursor:'grab'}}>
                <div className="footer-widget">
                  <h5>Quick Links</h5>
                  <ul className="footer-links">
                    <li style={{cursor:'pointer'}}>
                      <Link  to="/about-us" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                  <Link to="/gallery" className="nav-link">
                          Gallery
                        </Link>
                  </li>
                    <li>
                    <Link to="/destinations" className="nav-link">
                          Destinations
                        </Link>
                    </li>
                    <li>

                    <Link to="/blog" className="nav-link">
                      Blog
                    </Link>
                    </li>

                    <li>
                      <Link to="/contact-us" className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4  col-sm-6 col-12">
                <div className="footer-widget">
                  <h5>Instagram Post</h5>
                  <ul className="instagram-post">
                    <li>
                      <img src="assets/img/instagram1.jpg" alt="demo" />
                      <i className="bx bxl-instagram"></i>
                    </li>
                    <li>
                      <img src="assets/img/instagram2.jpg" alt="demo" />
                      <i className="bx bxl-instagram"></i>
                    </li>
                    <li>
                      <img src="assets/img/instagram3.jpg" alt="demo" />
                      <i className="bx bxl-instagram"></i>
                    </li>
                    <li>
                      <img src="assets/img/instagram4.jpg" alt="demo" />
                      <i className="bx bxl-instagram"></i>
                    </li>
                    <li>
                      <img src="assets/img/instagram5.jpg" alt="demo" />
                      <i className="bx bxl-instagram"></i>
                    </li>
                    <li>
                      <img src="assets/img/instagram6.jpg" alt="demo" />
                      <i className="bx bxl-instagram"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="copy-right-area">
            <div className="container">
              <div className="copy-right-content">
                <p>
                  Copyright @2021 the MountMonks Designed By &nbsp;
                  <a href="https:www.thebrandwick.com" target="_blank">
                     The Brandwick
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
