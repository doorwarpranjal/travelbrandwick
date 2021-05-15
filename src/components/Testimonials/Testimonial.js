import React from 'react'
import Slider from "react-slick";


export default function Testimonial() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true
  };

    return (
        <section id="testimonial" className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Hear From Our Clients</h2>
          </div>
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="">

              <Slider {...settings}>

          
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
           
                

              </Slider>

             
             
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
          {/* <img src="assets/img/shape1.png" alt="Background Shape" /> */}
        </div>
      </section>

    )
}
