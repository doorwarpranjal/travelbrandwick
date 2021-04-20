import { Link } from "react-router-dom";
import "./Home.css";
import { getAllTours, getCatgories, getTopRatedTours } from "../../API";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {
  const [topRatedTours, setTopRatedTours] = useState([]);
  const [allTours, setAllTours] = useState([]);
  const [categories,setCategories]=useState([])
  useEffect(() => {
    getTours();
    getTopTours();
    getAllCategories()
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
  const getAllCategories = async () => {
    let res = await getCatgories();
    if (res.status === 200) {
      console.log(res.data,'categories');
      setCategories(res.data);
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
        {/* <div className="container">
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
        </div> */}
      </div>

      <section className="features-section pt-100 pb-70">
        <section id="top-destination" className="top-destination-section pb-70">
          <div className="container">
            <div className="section-title text-center">
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
                          <img src={item.data.thumbnailImage} className='card-image' alt="demo" />
                        </div>
                        <div className="content">
                          <h3>
                            <Link to={`/destination/${item._id}`}>
                              {item.data.tourPlace}
                            </Link>
                          </h3>
                          <div className="review text-success">
                            <i className="bx bx-smile text-success"></i>{" "}
                            <span className="text-success">
                              {item.avgRating>4?
                              Math.floor(item.avgRating)
                           :"5" }
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
                            <li>{item.data.price} Rs.</li>
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
                    <img src={item.thumbnailImage} className='card-image' alt="demo" />
                  </div>
                  <div className="content">
                   
                    <h3>
                      <Link to={`/destination/${item._id}`}>{item.tourPlace}</Link>
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
                     
                      <li>{item.price} Rs.</li>
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
            <h2>Choose By Category</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="owl-carousel">
            {categories.map((item,index)=>{ 
              return(
                <div className="item-single mb-30">
                <div className="image">
                  <img src={item.thumbImage} className='carousel-image' alt="demo" />
                </div>
                <div className="content text-center">
                  <div className="content ">
                    <div className="title text-center">
                      <h3>
                        <Link to={"/toursbycategory/"+item._id}>{item.categoryName}</Link>
                      </h3>
                    </div>
                      </div>
                </div>
                <div className="flip-content text-center">
                 
                  <h3>
                    <Link to={"/toursbycategory/"+item._id}>{item.categoryName}</Link>
                  </h3>
                  <hr />
                </div>
              </div>
               )
            })} </div>
        </div>
      </section>
      <div className="container">
        {allTours.length>6? <>
          <div className="section-title">
            <h2>More Tours</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
      <div className="row filtr-container">
            {allTours.map((item, index) => {
              if(index>6 && index<12)
           {   return(
              <div
              ket={index}
                className="col-lg-4 col-md-6 filtr-item"
                data-category="1"
                data-sort="value"
              >
                <div className="item-single mb-30">
                  <div className="image">
                    <img src={item.thumbnailImage} className='card-image' alt="demo" />
                  </div>
                  <div className="content">
                   
                    <h3>
                      <Link to={`/destination/${item._id}`}>{item.tourPlace}</Link>
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
                     
                      <li>{item.price} Rs.</li>
                    </ul>
                  </div>
                </div>
              </div>
           )}})}{" "}
          </div> </>:null}
        </div>
    </section>
  );
}
