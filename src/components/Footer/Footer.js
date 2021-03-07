//import './Navbar.css'
import { useState } from "react";

export default function Footer() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <section id="hero-footer" >
 
 <footer class="footer-area">
        <div class="container">
            <div class="footer-top pt-100 pb-70">
                <div class="row">
                    <div class="col-lg-3 col-md-5 col-sm-6 col-12">
                        <div class="footer-widget">
                            <div class="navbar-brand">
                                <a href="index.html">
                                    <img src="assets/img/logo2.png" alt="Logo" />
                                </a>
                            </div>
                            <p>You can dream, create, design, and build the most wonderful place.</p>
                            <div class="contact-info">
                                <div class="content">
                                    <a href="tel:+0123456987"><i class='bx bx-phone'></i>+0123 456 987</a>
                                </div>
                                <div class="content">
                                    <a
                                        href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#18707d7474775872796d766c367b7775"><i
                                            class='bx bx-envelope'></i><span class="__cf_email__"
                                            data-cfemail="5f373a3333301f353e2a312b713c3032">[email&#160;protected]</span></a>
                                </div>
                                <div class="content">
                                    <a href="#"><i class='bx bx-map'></i>Mon-Fri: 8 AM – 7 PM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-5 col-sm-6 col-12">
                        <div class="footer-widget">
                            <h5>Latest News</h5>
                            <ul class="footer-news">
                                <li class="content">
                                    <a href="blog-details.html">Surrounded by the peaceful waters of Lake Victoria.</a>
                                    <span>October 05, 2020</span>
                                    <hr/>
                                </li>
                                <li class="content">
                                    <a href="blog-details.html">Morning came very early today. The alarm went off at 4
                                        am</a>
                                    <span>October 05, 2020</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-5 col-sm-6 col-12">
                        <div class="footer-widget">
                            <h5>Quick Links</h5>
                            <ul class="footer-links">
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
                    <div class="col-lg-4 col-md-5 col-sm-6 col-12">
                        <div class="footer-widget">
                            <h5>Instagram Post</h5>
                            <ul class="instagram-post">
                                <li>
                                    <img src="assets/img/instagram1.jpg" alt="Demo Image"/>
                                    <i class='bx bxl-instagram'></i>
                                </li>
                                <li>
                                    <img src="assets/img/instagram2.jpg" alt="Demo Image"/>
                                    <i class='bx bxl-instagram'></i>
                                </li>
                                <li>
                                    <img src="assets/img/instagram3.jpg" alt="Demo Image"/>
                                    <i class='bx bxl-instagram'></i>
                                </li>
                                <li>
                                    <img src="assets/img/instagram4.jpg" alt="Demo Image"/>
                                    <i class='bx bxl-instagram'></i>
                                </li>
                                <li>
                                    <img src="assets/img/instagram5.jpg" alt="Demo Image"/>
                                    <i class='bx bxl-instagram'></i>
                                </li>
                                <li>
                                    <img src="assets/img/instagram6.jpg" alt="Demo Image"/>
                                    <i class='bx bxl-instagram'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="copy-right-area">
                <div class="container">
                    <div class="copy-right-content">
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
