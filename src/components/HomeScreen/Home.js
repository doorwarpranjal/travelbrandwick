import { Link } from "react-router-dom";
import "./Home.css";
import { getAllTours, getTopRatedTours } from "../../API";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {
  const [topRatedTours, setTopRatedTours] = useState([]);
  const [allTours, setAllTours] = useState([]);
  useEffect(() => {
    getTours();
    getTopTours();
  }, []);
  const getTours = async () => {
    let res = await getAllTours();
    if (res.status === 200) {
    //  console.log(res.data);
      setAllTours(res.data);
      console.log(allTours)
    } else {
      console.log("empty");
    }
  };
  const getTopTours = async () => {
    let res = await getTopRatedTours();
    if (res.status === 200) {
     // console.log(res.data);
      setTopRatedTours(res.data);
    } else {
      console.log("not result ");
    }
  };
  return (
    <section id="hero">
      <div id="home" className="home-banner-area home-style-two">
        <div className="container-fluid p-0">
          <div className="banner-slider-two owl-carousel">
            <div className="slider-item">
              <div className="row">
                <div className="col-lg-5 align-self-end">
                  <div className="banner-image">
                    <img src="assets/img/banner/banner1.png" alt="Demo " />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-content">
                    <span className="sub-title">Amazing Places</span>
                    <h1>
                      Explore <span>Life</span> Travel Where You Want
                    </h1>
                    <p>
                      Travel has helped us to understand the meaning of life and
                      it has helped us become better people. Each time we
                      travel, we see the world with new eyes.
                    </p>
                    <Link to="/destinations" className="btn-primary">
                      Destination
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-shape">
                <img src="assets/img/banner/banner-bg.png" alt="demo" />
              </div>
            </div>
            <div className="slider-item">
              <div className="row">
                <div className="col-lg-5 align-self-end">
                  <div className="banner-image">
                    <img src="assets/img/banner/banner2.png" alt="demo" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-content">
                    <span className="sub-title">Amazing Places</span>
                    <h1>
                      Explore <span>Life</span> Travel Where You Want
                    </h1>
                    <p>
                      Travel has helped us to understand the meaning of life and
                      it has helped us become better people. Each time we
                      travel, we see the world with new eyes.
                    </p>
                    <Link to="/destinations" className="btn-primary">
                      Destination
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-shape">
                <img src="assets/img/banner/banner-bg.png" alt="demo" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="search-form">
            <form id="searchForm">
              <div className="row align-items-center">
                <div className="col-lg-11">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="select-box">
                        <i className="bx bx-map-alt"></i>
                        <select className="form-control">
                          <option data-display="Destination">Nothing</option>
                          <option value="1">North America</option>
                          <option value="2">Spain Madrid</option>
                          <option value="3">Japan Tokyo</option>
                          <option value="4">Europe City</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="select-box">
                        <i className="bx bx-calendar"></i>
                        <input
                          type="text"
                          className="date-select form-control"
                          placeholder="Depart Date"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="select-box">
                        <i className="bx bx-package"></i>
                        <select className="form-control">
                          <option data-display="Travel Type">
                            Travel Type
                          </option>
                          <option value="1">City Tour</option>
                          <option value="2">Family Tours</option>
                          <option value="3">Seasonal Tours</option>
                          <option value="4">Outdoor Activities</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="select-box">
                        <i className="bx bx-time"></i>
                        <select className="form-control">
                          <option data-display="Tour Duration">Nothing</option>
                          <option value="1">5 Days</option>
                          <option value="2">12 Days</option>
                          <option value="3">21 Days</option>
                          <option value="4">30 Days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1">
                  <button type="button" className="btn-search">
                    <i className="bx bx-search-alt"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="features-section pt-100 pb-70">
        <section id="top-destination" className="top-destination-section pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Top Destinations</h2>
              <p>
                Travel has helped us to understand the meaning of life and it
                has helped us become better people. Each time we travel, we see
                the world with new eyes.
              </p>
            </div>
            <div className="row">
              {topRatedTours.map((item, index) => {
                if (index < 3) {
                  return (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <div className="item-single mb-30">
                        <div className="image">
                          <img src={item.data.thumbnailImage} alt="demo" />
                        </div>
                        <div className="content">
                          <h3>
                            <Link to={`/destination-details/${item._id}`}>
                              {item.data.tourPlace}
                            </Link>
                          </h3>
                          <div className="review text-success">
                            <i className="bx bx-smile text-success"></i>{" "}
                            <span className="text-success">
                              {Math.floor(item.avgRating)}
                            </span>{" "}
                            <span className="text-success">
                              {item.avgRating > 8
                                ? "Great"
                                : item.avgRating > 5
                                ? "Superb"
                                : "Ok"}
                            </span>
                          </div>
                          <p>{item.data.description}</p>
                          <hr />
                          <ul className="list">
                            <li>
                              <i className="bx bx-time"></i>
                              {item.data.tourDuration}
                            </li>
                            <li>{item.data.price} Rupee</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}{" "}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="about-section about-style-two pt-100 pb-70 bg-light"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-content mb-30">
                  <h2>About Us</h2>
                  <h6>
                    Top Tour Operators and Travel Agency. We offering in total
                    793 tours and holidays throughout the world. Combined we
                    have received 1532 customer reviews and an average rating of
                    5 out of 5 stars.
                  </h6>
                  <p>
                    Travel has helped us to understand the meaning of life and
                    it has helped us become better people. Each time we travel,
                    we see the world with new eyes.
                  </p>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="content-list">
                        <i className="bx bx-check-shield"></i>
                        <h6>Safety Travel System</h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="content-list">
                        <i className="bx bx-donate-heart"></i>
                        <h6>Budget-Friendly Tour</h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="content-list">
                        <i className="bx bx-time"></i>
                        <h6>Expert Trip Planning</h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="content-list">
                        <i className="bx bx-station"></i>
                        <h6>Fast Communication</h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="content-list">
                        <i className="bx bx-like"></i>
                        <h6>Right Solution & Guide</h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="content-list">
                        <i className="bx bx-support"></i>
                        <h6>24/7 Customer Support</h6>
                      </div>
                    </div>
                  </div>
                  <div className="about-btn">
                    <Link to="/contact" className="btn-primary">
                      Contact Us
                    </Link>
                    <Link to="/about-us" className="btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="video-content mb-30">
                  <div className="video-image">
                    <img src="assets/img/about2.jpg" alt="video" />
                  </div>
                  <Link
                    to="https://www.youtube.com/watch?v=i9E_Blai8vk"
                    className="youtube-popup video-btn"
                  >
                    <i className="bx bx-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shape shape-1">
            <img src="assets/img/shape1.png" alt="Background Shape" />
          </div>
          <div className="shape shape-2">
            <img src="assets/img/shape2.png" alt="Background Shape" />
          </div>
        </section>

        <div className="container">
          <div className="section-title">
            <h2>Top Features</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="item-single mb-30">
                <i className="bx bx-calendar"></i>
                <h3>
                  <Link to="#">Reservation</Link>
                </h3>
                <p>
                  As compared with earlier times where a reservation personnel
                  has to update its inventory every time.
                </p>
                <div className="cta-btn">
                  <Link to="#" className="btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item-single mb-30">
                <i className="bx bxs-plane-take-off"></i>
                <h3>
                  <Link to="#">Tour Pack</Link>
                </h3>
                <p>
                  You can dream, create, design, and build the most wonder ful
                  place in the world. But it requires people.
                </p>
                <div className="cta-btn">
                  <Link to="#" className="btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-auto">
              <div className="item-single mb-30">
                <i className="bx bx-money"></i>
                <h3>
                  <Link to="#">Payment</Link>
                </h3>
                <p>
                  As compared with earlier times where a reservation personnel
                  has to update its inventory every time.
                </p>
                <div className="cta-btn">
                  <Link to="#" className="btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="destination"
        className="destination-section destination-style-two pt-100 pb-70 bg-light"
      >
        <div className="container">
          <div className="section-title">
            <h2>Destinations</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="row">
            <div className="col-md-8 m-auto">
              <div className="filter-group">
                <ul id="control" className="list-control">
                  <li className="active" data-filter="all">
                    All
                  </li>
                  <li data-filter="1">Budget-Friendly</li>
                  <li data-filter="2">Royal</li>
                  <li data-filter="3">Recommended</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row filtr-container">
            {allTours.map((item, index) => {
              if(index<6)
           {   return(
              <div
              ket={index}
                className="col-lg-4 col-md-6 filtr-item"
                data-category="1"
                data-sort="value"
              >
                <div className="item-single mb-30">
                  <div className="image">
                    <img src={item.thumbnailImage} alt="demo" />
                  </div>
                  <div className="content">
                   
                    <h3>
                      <Link to={`/destination-details/${item._id}`}>{item.tourPlace}</Link>
                    </h3>
                    {/* <div className="review">
                      <i className="bx bx-smile"></i>
                      <span>8.5</span>
                      <span>Superb</span>
                    </div> */}
                    <p>
                     {item.description}
                    </p>
                    <hr />
                    <ul className="list">
                      <li>
                        <i className="bx bx-time"></i>{item.tourDuration}
                      </li>
                     
                      <li>{item.price}</li>
                    </ul>
                  </div>
                </div>
              </div>
           )}})}{" "}
          </div>
        </div>
      </section>

      <section id="testimonial" className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>What're Our Clients Say</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="testimonial-slider owl-carousel">
                <div className="slider-item">
                  <div className="client-img">
                    <img src="assets/img/client1.jpg" alt="client-1" />
                  </div>
                  <div className="content">
                    <div className="client-info">
                      <h3>Jordan Alin</h3>
                      <span>Bloger & Youtuber</span>
                    </div>
                    <div className="quote">
                      <i className="bx bxs-quote-left"></i>
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className="review">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="client-img">
                    <img src="assets/img/client2.jpg" alt="client-1" />
                  </div>
                  <div className="content">
                    <div className="client-info mb-30">
                      <h3>David Milan</h3>
                      <span>Photographer</span>
                    </div>
                    <div className="quote">
                      <i className="bx bxs-quote-left"></i>
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className="review mt-15">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="client-img">
                    <img src="assets/img/client3.jpg" alt="client-1" />
                  </div>
                  <div className="content">
                    <div className="client-info mb-30">
                      <h3>Thomas Alva</h3>
                      <span>Journalist</span>
                    </div>
                    <div className="quote">
                      <i className="bx bxs-quote-left"></i>
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className="review mt-15">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="client-img">
                    <img src="assets/img/client4.jpg" alt="client-1" />
                  </div>
                  <div className="content">
                    <div className="client-info mb-30">
                      <h3>Emma Watson</h3>
                      <span>Actress & Model</span>
                    </div>
                    <div className="quote">
                      <i className="bx bxs-quote-left"></i>
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className="review mt-15">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="client-img">
                    <img src="assets/img/client5.jpg" alt="client-1" />
                  </div>
                  <div className="content">
                    <div className="client-info mb-30">
                      <h3>Jordan Alin</h3>
                      <span>Bloger & Youtuber</span>
                    </div>
                    <div className="quote">
                      <i className="bx bxs-quote-left"></i>
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className="review mt-15">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clients-img">
            <img
              className="image image-1"
              src="assets/img/client1.jpg"
              alt="demo"
            />
            <img
              className="image image-2"
              src="assets/img/client2.jpg"
              alt="demo"
            />
            <img
              className="image image-3"
              src="assets/img/client3.jpg"
              alt="demo"
            />
            <img
              className="image image-4"
              src="assets/img/client4.jpg"
              alt="demo"
            />
            <img
              className="image image-5"
              src="assets/img/client5.jpg"
              alt="demo"
            />
          </div>
        </div>
        <div className="shape">
          <img src="assets/img/shape1.png" alt="Background Shape" />
        </div>
      </section>

      <div id="video" className="video-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="video-content">
                <Link
                  to="https://www.youtube.com/watch?v=i9E_Blai8vk&amp;ab_channel=PriscillaLee"
                  className="youtube-popup video-btn"
                >
                  <i className="bx bx-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="tours" className="recent-tours-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Recent Tours</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="owl-carousel">
            <div className="item-single mb-30">
              <div className="image">
                <img src="assets/img/tour/tour6.jpg" alt="demo" />
              </div>
              <div className="content">
                <div className="content">
                  <div className="review">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <span>39 Review</span>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="#">Top Destination in Himachal</Link>
                    </h3>
                  </div>
                  <ul className="list">
                    <li>
                      <i className="bx bx-time"></i>7 Days
                    </li>
                    <li>
                      <i className="bx bx-group"></i>60+
                    </li>
                    <li>$1500</li>
                  </ul>
                </div>
              </div>
              <div className="flip-content">
                <span className="location">
                  <i className="bx bx-map"></i>Hvar, Croatia
                </span>
                <h3>
                  <Link to="/tours">Top Destination in Himachal</Link>
                </h3>
                <div className="review mb-15">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <span>25 Review</span>
                </div>
                <p>
                  A wonderful little cottage right on the seashore - perfect for
                  exploring with the little boat.
                </p>
                <hr />
                <ul className="list">
                  <li>
                    <i className="bx bx-time"></i>3 Days
                  </li>
                  <li>
                    <i className="bx bx-group"></i>160+
                  </li>
                  <li>$1500</li>
                </ul>
              </div>
            </div>
            <div className="item-single mb-30">
              <div className="image">
                <img src="assets/img/tour/tour7.jpg" alt="demo" />
              </div>
              <div className="content">
                <div className="content">
                  <div className="review">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <span>27 Review</span>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="#">Top Honeymoon Destinations</Link>
                    </h3>
                  </div>
                  <ul className="list">
                    <li>
                      <i className="bx bx-time"></i>5 Days
                    </li>
                    <li>
                      <i className="bx bx-group"></i>59+
                    </li>
                    <li>$1350</li>
                  </ul>
                </div>
              </div>
              <div className="flip-content">
                <span className="location">
                  <i className="bx bx-map"></i>Gulf, Thailand
                </span>
                <h3>
                  <Link to="/tours">Top Honeymoon Destinations</Link>
                </h3>
                <div className="review mb-15">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <span>27 Review</span>
                </div>
                <p>
                  A wonderful little cottage right on the seashore - perfect for
                  exploring with the little boat.
                </p>
                <hr />
                <ul className="list">
                  <li>
                    <i className="bx bx-time"></i>5 Days
                  </li>
                  <li>
                    <i className="bx bx-group"></i>59+
                  </li>
                  <li>$1350</li>
                </ul>
              </div>
            </div>
            <div className="item-single mb-30">
              <div className="image">
                <img src="assets/img/tour/tour8.jpg" alt="demo" />
              </div>
              <div className="content">
                <div className="content">
                  <div className="review">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <span>46 Review</span>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="#">Treks and Camping</Link>
                    </h3>
                  </div>
                  <ul className="list">
                    <li>
                      <i className="bx bx-time"></i>7 Days
                    </li>
                    <li>
                      <i className="bx bx-group"></i>160+
                    </li>
                    <li>$1090</li>
                  </ul>
                </div>
              </div>
              <div className="flip-content">
                <span className="location">
                  <i className="bx bx-map"></i>Egypt, Asia
                </span>
                <h3>
                  <Link to="/tours">Trek and Camping</Link>
                </h3>
                <div className="review mb-15">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <span>46 Review</span>
                </div>
                <p>
                  A wonderful little cottage right on the seashore - perfect for
                  exploring with the little boat.
                </p>
                <hr />
                <ul className="list">
                  <li>
                    <i className="bx bx-time"></i>7 Days
                  </li>
                  <li>
                    <i className="bx bx-group"></i>160+
                  </li>
                  <li>$1090</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="blog"
        className="blog-section blog-style-two pt-100 pb-70 bg-light"
      >
        <div className="container">
          <div className="section-title">
            <h2>Latest News & Blog</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="item-single mb-30">
                <div className="image">
                  <img src="assets/img/blog/blog5.jpg" alt="demo" />
                </div>
                <div className="content">
                  <ul className="info-list">
                    <li>
                      <i className="bx bx-calendar"></i> Oct 10, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Hang on the beach with little sea turtles.
                    </Link>
                  </h3>
                  <p>
                    I have personally participated in many of the programs
                    mentioned on this site. One of the programs is Save Our
                    Sea...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item-single mb-30">
                <div className="image">
                  <img src="assets/img/blog/blog2.jpg" alt="demo" />
                </div>
                <div className="content">
                  <ul className="info-list">
                    <li>
                      <i className="bx bx-calendar"></i> Nov 10, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      In nightlife you can do anything you want.
                    </Link>
                  </h3>
                  <p>
                    I am a self-proclaimed experience junkie. There is nothing I
                    love more than going somewhere or doing something new...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-auto">
              <div className="item-single mb-30">
                <div className="image">
                  <img src="assets/img/blog/blog6.jpg" alt="demo" />
                </div>
                <div className="content">
                  <ul className="info-list">
                    <li>
                      <i className="bx bx-calendar"></i> Oct 5, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Travel survival tips: airports & flights.
                    </Link>
                  </h3>
                  <p>
                    I recently returned from a three-week trip to the
                    Netherlands, United Kingdom, India, and Hong Kong. I was on
                    13 planes...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
