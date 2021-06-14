import { Link, useHistory } from "react-router-dom";
import "./Home.css";
import {
  getAllTours,
  getCategoryWise,
  getCatgories,
  getTopRatedTours,
  getTrending,
} from "../../API";
import { useEffect } from "react";
import { useState } from "react";
import RCard from "../Card/RatedCard";
import Card from "../Card/Card";
import { MenuItem, Select, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import Testimonial from "../Testimonials/Testimonial";
import Slider from "react-slick";
import { Form } from "react-bootstrap";

export default function Home() {
  let history = useHistory();
  const [topRatedTours, setTopRatedTours] = useState([]);
  const [allTours, setAllTours] = useState([]);
  const [categories, setCategories] = useState([]);
  const [keyValues, setkeyValues] = useState([]);

  const [categoryWiseTours, setcategoryWiseTours] = useState([]);

  useEffect(() => {
    getTours();
    getTopTours();
    getAllCategories();
  }, [1]);

  const getTours = async () => {
    let res = await getAllTours();
    if (res.status === 200) {
      //  console.log(res.data);
      setAllTours(res.data);
      let array = [];
      res.data.forEach((element) => {
        if (element.tourPlace) {
          array.push(element.tourPlace);
        }
      });
      res.data.forEach((element) => {
        if (element.location) {
          array.push(element.location);
        }
      });
      let a;
      res.data.forEach((element) => {
        if (element.keywords.length > 0) {
          array = [...array, ...element.keywords];
        }
        console.log(a);
      });
      setkeyValues(array);

      // console.log(allTours);
    } else {
      console.log("empty");
    }
  };

  const getAllCategories = async () => {
    let res = await getCatgories();
    let res1 = await getCategoryWise();
    setcategoryWiseTours(res1.data);
    if (res.status === 200) {
      console.log(res1, "categories");
      setCategories(res.data);
      console.log(allTours);
    } else {
      console.log("empty");
    }
  };
  const getTopTours = async () => {
    let res = await getTrending();
    if (res.status === 200) {
      // console.log(res.data);
      setTopRatedTours(res.data);
    } else {
      console.log("not result ");
    }
  };
  const [searchTerm, setsearchTerm] = useState("");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingscat = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section id="hero">
        <div id="home" className="home-banner-area home-style-two">
          <div className="container-fluid p-1 homesection-banner">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-sm-12 m-auto text-center">
                <h1 className="homepage-cta-heading">
                  Best destinations for the one who love travelling !
                </h1>

                <div className="d-flex align-items-center justify-content-center homepage-searchbar-div">
                  <input
                    type="text"
                    list="cars"
                    className="homepage-searchbox-input"
                    onChange={(e) => setsearchTerm(e.target.value)}
                  />
                  <datalist id="cars">
                    {keyValues.map((item, index) => {
                      return <option>{item}</option>;
                    })}{" "}
                  </datalist>

                  <button
                    className="cta-button-search"
                    onClick={() => {
                      history.push({
                        pathname: "/destinations",
                        search: searchTerm,
                        state: searchTerm,
                      });
                    }}
                  >
                    Search
                  </button>

                  {/* <input className="homepage-searchbox-input" placeholder="Type destination here...." />
                   */}
                </div>
              </div>
            </div>
          </div>

          {/* trip search form goes here  */}
          <div className="container mt-20" style={{ display: "none" }}>
            <div className="search-form" style={{ zIndex: 1 }}>
              <form id="searchForm">
                <div className="row align-items-center m-auto">
                  <div className="col-1 col-md-3 "></div>
                  <div className="col-lg-7 ">
                    <Autocomplete
                      style={{ width: "100%" }}
                      id="fixed-tags-demo"
                      options={keyValues}
                      // onChange={addMembersToTeam}
                      //  getOptionLabel={(option) => option.name}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className=" choosing-option-autocomplete"
                          variant="standard"
                          label="Search"
                          placeholder="Select Tour by name and Keywords"
                        />
                      )}
                    />{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* trip search form goes here  */}

        <section className="features-section pt-80 pb-70">
          <section
            id="top-destination"
            className="top-destination-section pb-70"
          >
            <div className="container-fluid">
              <div className="section-title text-center">
                <h2>Trending Tours</h2>
                <p>
                  Travel has helped us to understand the meaning of life and it
                  has helped us become better people.
                </p>
              </div>

              <Slider className="row ml-auto mr-auto card-row" {...settings}>
                {topRatedTours.map((item, index) => {
                  if (index < 16) {
                    return (
                      <div className="col-lg-12 col-sm-12 mt-4" key={index}>
                        <Card cardItem={item} />
                      </div>
                    );
                  }
                })}
              </Slider>
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
                    <h2 className="mb-2">About Us</h2>

                    <p className="mb-3">
                      Travel has helped us to understand the meaning of life and
                      it has helped us become better people. Each time we
                      travel, we see the world with new eyes.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="content-list">
                          <i className="bx bx-check-shield"></i>
                          <p>Safety Travel System</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="content-list">
                          <i className="bx bx-donate-heart"></i>
                          <p>Budget-Friendly Tour</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="content-list">
                          <i className="bx bx-time"></i>
                          <p>Expert Trip Planning</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="content-list">
                          <i className="bx bx-station"></i>
                          <p>Fast Communication</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="content-list">
                          <i className="bx bx-like"></i>
                          <p>Right Solution & Guide</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="content-list">
                          <i className="bx bx-support"></i>
                          <p>24/7 Customer Support</p>
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
                <div className="col-lg-6" style={{ maxHeight: "80vh" }}>
                  <div className="video-content mb-30">
                    <div className="video-image">
                      <img
                        loading="lazy"
                        style={{ maxHeight: "80vh", objectFit: "cover" }}
                        src="https://s3-ap-southeast-1.amazonaws.com/kesarimedialibrary/wp-content/uploads/2019/04/15093432/Ladakh-Bike-Trip-1.jpg"
                        alt="Ladakh Bike Trip Photo"
                      />
                    </div>
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
          <div className="container-fluid">
            <div className="section-title">
              <h2>Popular Destinations</h2>
              <p>
                Travel has helped us to understand the meaning of life and it
                has helped us become better people. Each time we travel, we see
                the world with new eyes.
              </p>
            </div>
            <div className="container">
              <div className="row filtr-container">
                {allTours.map((item, index) => {
                  if (index < 6) {
                    return (
                      <div className="col-lg-4 col-md-6 mt-4" key={index}>
                        <Card cardItem={item} />
                      </div>
                    );
                  }
                })}{" "}
              </div>
            </div>
          </div>
        </section>

        <Testimonial />

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

        {/* ======================== Start Choose tours by category section  ======================== */}

        <section id="tours" className="recent-tours-section pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Choose By Category</h2>
              <p>
                Travel has helped us to understand the meaning of life and it
                has helped us become better people. Each time we travel, we see
                the world with new eyes.
              </p>
            </div>
            <Slider className="row ml-auto mr-auto card-row" {...settingscat}>
              {categories.map((item, index) => {
                return (
                  <div className="item-single mb-30">
                    <div className="image m-3">
                      <img
                        src={item.thumbImage}
                        className="carousel-image"
                        alt="demo"
                      />
                    </div>
                    <div className="content text-center">
                      <div className="content ">
                        <div className="title text-center">
                          <h3>
                            <Link to={"/toursbycategory/" + item._id}>
                              {item.categoryName}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="flip-content text-center">
                      <h3>
                        <Link to={"/toursbycategory/" + item._id}>
                          {item.categoryName}
                        </Link>
                      </h3>
                      <hr />
                    </div>
                  </div>
                );
              })}{" "}
            </Slider>
          </div>
        </section>

        {/* ======================== End of choose tours by category section ======================== */}

        <div className="container">
          <div className="section-title">
            <h2>Seasonal Category</h2>
          </div>
          {categoryWiseTours.map((item) => {
            return (
              <>
                <div className="section-title">
                  <h5>{item.categoryName}</h5>
                </div>
                <div className="row filtr-container mb-30">
                  {item.CategoryWise.length > 2
                    ? item.CategoryWise.reverse()
                        .slice(3)
                        .map((element, index) => {
                          return (
                            <div className="col-lg-4 col-md-6 mt-4" key={index}>
                              <Card cardItem={element} />
                            </div>
                          );
                        })
                    : item.CategoryWise.reverse().map((element, index) => {
                        return (
                          <div className="col-lg-4 col-md-6 mt-4" key={index}>
                            <Card cardItem={element} />
                          </div>
                        );
                      })}
                </div>{" "}
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
