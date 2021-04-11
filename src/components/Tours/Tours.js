import { Rating } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarBorderBox  from '@material-ui/icons/StarBorder';
import { getAllTours, getImages } from "../../API";
export default function Tours() {
  const [images, setImages] = useState([]);
  const [tour,setTours]=useState([])
  useEffect(() => {
    getAllImages();
    getTours();
  }, []);
  const getTours = async () => {
    let res = await getAllTours();
    if (res.status === 200) {
      //  console.log(res.data);
         setTours(res.data);
      //   console.log(allTours)
    } else {
      console.log("empty");
    }
  };
  const getAllImages = async () => {
    let res = await getImages();
    if (res.status === 200) {
      console.log(res.data);
      setImages(res.data.Images);
      // setTripDetails(res.data)
    } else {
      console.log(res);
    }
  };
  return (
    <div>
      <div className="page-title-area ptb-100">
        <div className="container">
          <div className="page-title-content">
            <h1>Tours</h1>
            <ul>
              <li className="item">
                <Link to="/">Home</Link>
              </li>
              <li className="item">
                <Link to="/tours">
                  <i className="bx bx-chevrons-right" />
                  Tours
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-image">
          <img src="assets/img/page-title-area/tour.jpg" alt="demo" />
        </div>
      </div>
      <section
        id="tours"
        className="tours-section tours-style-two pt-100 pb-70"
      >
        <div className="container">
          <div className="section-title">
            <h2>Recent Tours</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="row">
            {images.map((item, index) => {
              if (index < 2) {
                return (
                  <div className="col-lg-6 col-md-6">
                    <div className="item-single mb-30">
                      <div className="image">
                        <img src={item.url} alt="demo" />
                      </div>
                      <div className="content">
                        <h3>
                          <Link to="#">{item.tourPlace}</Link>
                        </h3>
                        <div className="review ">
                        <Rating
          name="customized-empty"
          defaultValue={item.rating}
        max={10}
          readOnly
          emptyIcon={<StarBorderBox fontSize="inherit" />}
          /></div>
                        <hr />
                      </div>
                    </div>
                  </div>
                );
              } else if (index < 7) {
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="item-single mb-30">
                      <div className="image">
                        <img src={item.url} alt="demo" />
                      </div>
                      <div className="content">
                        <div className="review">
                         
                        </div>
                        <div className="title">
                          <h3>
                            <Link to="/">{item.tourPlace}</Link>
                          </h3>
                          <div className="review " style={{fontSize:'10px'}}>
                        <Rating
          name="customized-empty"
          defaultValue={parseInt(item.rating/2)}
        max={5}
          readOnly
          emptyIcon={<StarBorderBox fontSize="inherit" />}
          /></div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
      <section
        id="tours"
        className="tours-section tours-style-two ptb-100 bg-light"
      >
        <div className="container">
          <div className="section-title">
            <h2>Recent Tours</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="row filtr-container">
            {tour.map((item, index) => {
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
                      <span>Bloger &amp; Youtuber</span>
                    </div>
                    <div className="quote">
                      <i className="bx bxs-quote-left" />
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className="review">
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
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
                      <i className="bx bxs-quote-left" />
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className="review mt-15">
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
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
                      <i className="bx bxs-quote-left" />
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className="review mt-15">
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
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
                      <span>Actress &amp; Model</span>
                    </div>
                    <div className="quote">
                      <i className="bx bxs-quote-left" />
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className="review mt-15">
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
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
                      <span>Bloger &amp; Youtuber</span>
                    </div>
                    <div className="quote">
                      <i className="bx bxs-quote-left" />
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className="review mt-15">
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
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
    </div>
  );
}
