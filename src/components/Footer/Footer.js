//import './Navbar.css'
import { useState } from "react";

export default function Footer() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <section id="hero-footer" >
 
 <footer className="footer-area">
        <div className="container">
            <div className="footer-top pt-100 pb-70">
                <div className="row">
                    <div className="col-lg-3 col-md-5 col-sm-6 col-12">
                        <div className="footer-widget">
                            <div className="navbar-brand">
                                <a href="index.html">
                                    <img src="assets/img/logo2.png" alt="Logo" />
                                </a>
                            </div>
                            <p>You can dream, create, design, and build the most wonderful place.</p>
                            <div className="contact-info">
                                <div className="content">
                                    <a href="tel:+0123456987"><i className='bx bx-phone'></i>+0123 456 987</a>
                                </div>
                                <div className="content">
                                    <a
                                        href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#18707d7474775872796d766c367b7775"><i
                                            className='bx bx-envelope'></i><span className="__cf_email__"
                                            data-cfemail="5f373a3333301f353e2a312b713c3032">[email&#160;protected]</span></a>
                                </div>
                                <div className="content">
                                    <a href="#"><i className='bx bx-map'></i>Mon-Fri: 8 AM – 7 PM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h5>Latest News</h5>
                            <ul className="footer-news">
                                <li className="content">
                                    <a href="blog-details.html">Surrounded by the peaceful waters of Lake Victoria.</a>
                                    <span>October 05, 2020</span>
                                    <hr/>
                                </li>
                                <li className="content">
                                    <a href="blog-details.html">Morning came very early today. The alarm went off at 4
                                        am</a>
                                    <span>October 05, 2020</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-5 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h5>Quick Links</h5>
                            <ul className="footer-links">
                                <li>
                                    <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                    <a href="destinations.html">Destinations</a>
                                </li>
                                <li>
                                    <a href="blog-style-1.html">Latest Blog</a>
                                </li>
                                <li>
                                    <a href="team.html">Our Team</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h5>Instagram Post</h5>
                            <ul className="instagram-post">
                                <li>
                                    <img src="assets/img/instagram1.jpg" alt="demo"/>
                                    <i className='bx bxl-instagram'></i>
                                </li>
                                <li>
                                    <img src="assets/img/instagram2.jpg" alt="demo"/>
                                    <i className='bx bxl-instagram'></i>
                                </li>
                                <li>
                                    <img src="assets/img/instagram3.jpg" alt="demo"/>
                                    <i className='bx bxl-instagram'></i>
                                </li>
                                <li>
                                    <img src="assets/img/instagram4.jpg" alt="demo"/>
                                    <i className='bx bxl-instagram'></i>
                                </li>
                                <li>
                                    <img src="assets/img/instagram5.jpg" alt="demo"/>
                                    <i className='bx bxl-instagram'></i>
                                </li>
                                <li>
                                    <img src="assets/img/instagram6.jpg" alt="demo"/>
                                    <i className='bx bxl-instagram'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="copy-right-area">
                <div className="container">
                    <div className="copy-right-content">
                        <p>
                            Copyright @2021  Designed By
                            <a href="https://hibootstrap.com/" target="_blank">
                                theBrandwick
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
