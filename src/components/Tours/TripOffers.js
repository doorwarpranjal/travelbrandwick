import {Link} from 'react-router-dom'
export default function TripOffers() {
  return (

    <div>
  <div className="page-title-area ptb-100">
    <div className="container">
      <div className="page-title-content">
        <h1>Offers &amp; Discount</h1>
        <ul>
          <li className="item"><Link to="/">Home</Link></li>
          <li className="item">
            <Link to="/special-offers"><i className="bx bx-chevrons-right" />Special Offers</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="bg-image">
      <img src="assets/img/page-title-area/offer.jpg" alt="demo" />
    </div>
  </div>
  <section id="lastOffer" className="last-offer-section pt-100 pb-70 bg-light">
    <div className="container">
      <div className="section-title">
        <h2>Last Minute Offer</h2>
        <p>
          Travel has helped us to understand the meaning of life and it has
          helped us become better people. Each time we travel, we see the
          world with new eyes.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 filtr-item">
          <div className="item-single mb-30">
            <div className="image">
              <img src="assets/img/destination1.jpg" alt="demo" />
            </div>
            <div className="content">
              <span className="location"><i className="bx bx-map" />Hvar, Croatia</span>
              <h3>
                <Link to="/destination-details">Piazza Castello</Link>
              </h3>
              <div className="review">
                <i className="bx bx-smile" />
                <span>8.5</span>
                <span>Superb</span>
              </div>
              <p>
                A wonderful little cottage right on the seashore - perfect for
                exploring.
              </p>
              <hr />
              <ul className="list">
                <li><i className="bx bx-time" />3 Days</li>
                <li><i className="bx bx-group" />160+</li>
                <li>$500</li>
              </ul>
              <div className="discount">
                <span>Discount</span>
                <span>10%</span>
              </div>
            </div>
            <div className="spacer" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 filtr-item">
          <div className="item-single mb-30">
            <div className="image">
              <img src="assets/img/destination2.jpg" alt="demo" />
            </div>
            <div className="content">
              <span className="location"><i className="bx bx-map" />Santorini, Oia ,Greece</span>
              <h3>
                <Link to="/destination-details"> Oia ,Greece</Link>
              </h3>
              <div className="review">
                <i className="bx bx-smile" />
                <span>9</span>
                <span>Superb</span>
              </div>
              <p>
                A wonderful little cottage right on the seashore - perfect for
                exploring.
              </p>
              <hr />
              <ul className="list">
                <li><i className="bx bx-time" />7 Days</li>
                <li><i className="bx bx-group" />65+</li>
                <li>$2000</li>
              </ul>
              <div className="discount">
                <span>Discount</span>
                <span>30%</span>
              </div>
            </div>
            <div className="spacer" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 m-auto=">
          <div className="item-single mb-30">
            <div className="image">
              <img src="assets/img/destination3.jpg" alt="demo" />
            </div>
            <div className="content">
              <span className="location"><i className="bx bx-map" />Rialto Bridge, Italy</span>
              <h3>
                <Link to="/destination-details">Rialto Bridge</Link>
              </h3>
              <div className="review">
                <i className="bx bx-smile" />
                <span>7.5</span>
                <span>Superb</span>
              </div>
              <p>
                A wonderful little cottage right on the seashore - perfect for
                exploring.
              </p>
              <hr />
              <ul className="list">
                <li><i className="bx bx-time" />5 Days</li>
                <li><i className="bx bx-group" />96+</li>
                <li>$2100</li>
              </ul>
              <div className="discount">
                <span>Discount</span>
                <span>20%</span>
              </div>
            </div>
            <div className="spacer" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="features-section pt-100 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="item-single mb-30">
            <i className="bx bx-calendar" />
            <h3><Link to="#">Reservation</Link></h3>
            <p>
              As compared with earlier times where a reservation personnel has
              to update its inventory every time.
            </p>
            <div className="cta-btn">
              <Link to="#" className="btn-primary">Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="item-single mb-30">
            <i className="bx bxs-plane-take-off" />
            <h3><Link to="#">Tour Pack</Link></h3>
            <p>
              You can dream, create, design, and build the most wonder ful
              place in the world. But it requires people.
            </p>
            <div className="cta-btn">
              <Link to="#" className="btn-primary">Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 m-auto=">
          <div className="item-single mb-30">
            <i className="bx bx-money" />
            <h3><Link to="#">Payment</Link></h3>
            <p>
              As compared with earlier times where a reservation personnel has
              to update its inventory every time.
            </p>
            <div className="cta-btn">
              <Link to="#" className="btn-primary">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="offers" className="offers-section ptb-100 bg-light">
    <div className="container">
      <div className="section-title">
        <h2>Special Offers &amp; Discount</h2>
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
              <img src="assets/img/offer1.jpg" alt="demo" />
            </div>
            <div className="content">
              <div className="review">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <span>39 Review</span>
              </div>
              <div className="title">
                <h3>
                  <Link to="/tours">Asia Tour</Link>
                </h3>
                <span>$2000</span>
              </div>
              <ul className="list">
                <li><i className="bx bx-time" />7 Days</li>
                <li><i className="bx bx-group" />60+</li>
                <li>$1500</li>
              </ul>
            </div>
            <div className="discount">
              <span>Discount</span>
              <span>30%</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="item-single mb-30">
            <div className="image">
              <img src="assets/img/offer2.jpg" alt="demo" />
            </div>
            <div className="content">
              <div className="review">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <span>19 Review</span>
              </div>
              <div className="title">
                <h3>
                  <Link to="/tours">Russia Tour of Couple</Link>
                </h3>
                <span>$1600</span>
              </div>
              <ul className="list">
                <li><i className="bx bx-time" />5 Days</li>
                <li><i className="bx bx-group" />130+</li>
                <li>$1200</li>
              </ul>
            </div>
            <div className="discount">
              <span>Discount</span>
              <span>29%</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="item-single mb-30">
            <div className="image">
              <img src="assets/img/offer3.jpg" alt="demo" />
            </div>
            <div className="content">
              <div className="review">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <span>35 Review</span>
              </div>
              <div className="title">
                <h3>
                  <Link to="/tours">Campfire In Australia</Link>
                </h3>
                <span>$2600</span>
              </div>
              <ul className="list">
                <li><i className="bx bx-time" />3 Days</li>
                <li><i className="bx bx-group" />91+</li>
                <li>$2200</li>
              </ul>
            </div>
            <div className="discount">
              <span>Discount</span>
              <span>16%</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="item-single mb-30">
            <div className="image">
              <img src="assets/img/offer4.jpg" alt="demo" />
            </div>
            <div className="content">
              <div className="review">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <span>39 Review</span>
              </div>
              <div className="title">
                <h3>
                  <Link to="/tours">T??rres, Brazil</Link>
                </h3>
                <span>$2000</span>
              </div>
              <ul className="list">
                <li><i className="bx bx-time" />7 Days</li>
                <li><i className="bx bx-group" />60+</li>
                <li>$1500</li>
              </ul>
            </div>
            <div className="discount">
              <span>Discount</span>
              <span>30%</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="item-single mb-30">
            <div className="image">
              <img src="assets/img/offer5.jpg" alt="demo" />
            </div>
            <div className="content">
              <div className="review">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <span>19 Review</span>
              </div>
              <div className="title">
                <h3>
                  <Link to="/tours">Ao Nang, Thailand</Link>
                </h3>
                <span>$1600</span>
              </div>
              <ul className="list">
                <li><i className="bx bx-time" />5 Days</li>
                <li><i className="bx bx-group" />130+</li>
                <li>$1200</li>
              </ul>
            </div>
            <div className="discount">
              <span>Discount</span>
              <span>29%</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="item-single mb-30">
            <div className="image">
              <img src="assets/img/offer6.jpg" alt="demo" />
            </div>
            <div className="content">
              <div className="review">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <span>35 Review</span>
              </div>
              <div className="title">
                <h3>
                  <Link to="/tours">Kendhoo, Maldives</Link>
                </h3>
                <span>$2600</span>
              </div>
              <ul className="list">
                <li><i className="bx bx-time" />3 Days</li>
                <li><i className="bx bx-group" />91+</li>
                <li>$2200</li>
              </ul>
            </div>
            <div className="discount">
              <span>Discount</span>
              <span>16%</span>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="pagination text-center">
            <span className="page-numbers current" aria-current="page">1</span>
            <Link to="#" className="page-numbers">2</Link>
            <Link to="#" className="page-numbers">3</Link>
            <Link to="#" className="page-numbers">Next</Link>
          </div>
        </div>
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
        <div className="col-lg-8 m-auto=">
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
                  programme allowing anyone with no previous travel experience
                  to start their own travel business. This is an advanced
                  course to help build knowledge in travel and develop sales
                  skills.
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
                  programme allowing anyone with no previous travel experience
                  to start their own travel business. This is an advanced
                  course to help build knowledge in travel and develop sales
                  skills.
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
                  programme allowing anyone with no previous travel experience
                  to start their own travel business. This is an advanced
                  course to help build knowledge in travel and develop sales
                  skills.
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
                  programme allowing anyone with no previous travel experience
                  to start their own travel business. This is an advanced
                  course to help build knowledge in travel and develop sales
                  skills.
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
                  programme allowing anyone with no previous travel experience
                  to start their own travel business. This is an advanced
                  course to help build knowledge in travel and develop sales
                  skills.
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
        <img className="image image-1" src="assets/img/client1.jpg" alt="demo" />
        <img className="image image-2" src="assets/img/client2.jpg" alt="demo" />
        <img className="image image-3" src="assets/img/client3.jpg" alt="demo" />
        <img className="image image-4" src="assets/img/client4.jpg" alt="demo" />
        <img className="image image-5" src="assets/img/client5.jpg" alt="demo" />
      </div>
    </div>
    <div className="shape">
      <img src="assets/img/shape1.png" alt="Background Shape" />
    </div>
  </section>
</div>


  )
}
