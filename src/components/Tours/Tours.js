import {Link} from 'react-router-dom'
export default function Tours() {
  return (
    <div>
      <div className='page-title-area ptb-100'>
        <div className='container'>
          <div className='page-title-content'>
            <h1>Tours</h1>
            <ul>
              <li className='item'>
               <Link to='/'>Home</Link>
              </li>
              <li className='item'>
               <Link to='/tours'>
                  <i className='bx bx-chevrons-right' />
                  Tours
               </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='bg-image'>
          <img src='assets/img/page-title-area/tour.jpg' alt="demo" />
        </div>
      </div>
      <section
        id='tours'
        className='tours-section tours-style-two pt-100 pb-70'
      >
        <div className='container'>
          <div className='section-title'>
            <h2>Recent Tours</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour1.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <span className='location'>
                    <i className='bx bx-map' />
                    Oia, Greece
                  </span>
                  <h3>
                   <Link to='/tours'>Greek Cottage Greece</Link>
                  </h3>
                  <div className='review mb-15'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>25 Review</span>
                  </div>
                  <p>
                    A wonderful little cottage right on the seashore - perfect
                    for exploring with the little boat which is included in the
                    price. Located opposite Nidri sleeping.
                  </p>
                  <hr />
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />3 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      160+
                    </li>
                    <li>$1500</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour9.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <span className='location'>
                    <i className='bx bx-map' />
                    Thailand
                  </span>
                  <h3>
                   <Link to='/tours'>Great Natural Sea</Link>
                  </h3>
                  <div className='review mb-15'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>31 Review</span>
                  </div>
                  <p>
                    A wonderful little cottage right on the seashore - perfect
                    for exploring with the little boat which is included in the
                    price. Located opposite Nidri sleeping.
                  </p>
                  <hr />
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />5 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      138+
                    </li>
                    <li>$1900</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour2.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>39 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Piazza Castello</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />7 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$2100</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour3.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>69 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Santorini, Greece</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />5 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$1500</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 m-auto'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour4.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>39 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Metropolitan City</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />7 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$2300</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id='tours'
        className='tours-section tours-style-two ptb-100 bg-light'
      >
        <div className='container'>
          <div className='section-title'>
            <h2>Our Tours</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour5.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>39 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Piazza Castello</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />7 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$2100</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour6.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>69 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Santorini, Greece</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />5 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$1500</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour7.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>39 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Metropolitan City</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />7 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$2300</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour8.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>39 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Piazza Castello</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />7 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$2100</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour10.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>69 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Santorini, Greece</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />5 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$1500</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour11.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>39 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Metropolitan City</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />7 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$2300</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour12.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>39 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Piazza Castello</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />7 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$2100</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour13.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>69 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Santorini, Greece</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />5 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$1500</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 m-auto'>
              <div className='item-single mb-30'>
                <div className='image'>
                  <img src='assets/img/tour/tour14.jpg' alt="demo" />
                </div>
                <div className='content'>
                  <div className='review'>
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <i className='bx bxs-star' />
                    <span>39 Review</span>
                  </div>
                  <div className='title'>
                    <h3>
                     <Link to='/tours'>Metropolitan City</Link>
                    </h3>
                  </div>
                  <ul className='list'>
                    <li>
                      <i className='bx bx-time' />7 Days
                    </li>
                    <li>
                      <i className='bx bx-group' />
                      60+
                    </li>
                    <li>$2300</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-12 col-md-12'>
              <div className='pagination text-center'>
                <span className='page-numbers current' aria-current='page'>
                  1
                </span>
               <Link to='#' className='page-numbers'>
                  2
               </Link>
               <Link to='#' className='page-numbers'>
                  3
               </Link>
               <Link to='#' className='page-numbers'>
                  Next
               </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='testimonial' className='testimonial-section ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>What're Our Clients Say</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-8 m-auto'>
              <div className='testimonial-slider owl-carousel'>
                <div className='slider-item'>
                  <div className='client-img'>
                    <img src='assets/img/client1.jpg' alt='client-1' />
                  </div>
                  <div className='content'>
                    <div className='client-info'>
                      <h3>Jordan Alin</h3>
                      <span>Bloger &amp; Youtuber</span>
                    </div>
                    <div className='quote'>
                      <i className='bx bxs-quote-left' />
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className='review'>
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                    </div>
                  </div>
                </div>
                <div className='slider-item'>
                  <div className='client-img'>
                    <img src='assets/img/client2.jpg' alt='client-1' />
                  </div>
                  <div className='content'>
                    <div className='client-info mb-30'>
                      <h3>David Milan</h3>
                      <span>Photographer</span>
                    </div>
                    <div className='quote'>
                      <i className='bx bxs-quote-left' />
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className='review mt-15'>
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                    </div>
                  </div>
                </div>
                <div className='slider-item'>
                  <div className='client-img'>
                    <img src='assets/img/client3.jpg' alt='client-1' />
                  </div>
                  <div className='content'>
                    <div className='client-info mb-30'>
                      <h3>Thomas Alva</h3>
                      <span>Journalist</span>
                    </div>
                    <div className='quote'>
                      <i className='bx bxs-quote-left' />
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className='review mt-15'>
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                    </div>
                  </div>
                </div>
                <div className='slider-item'>
                  <div className='client-img'>
                    <img src='assets/img/client4.jpg' alt='client-1' />
                  </div>
                  <div className='content'>
                    <div className='client-info mb-30'>
                      <h3>Emma Watson</h3>
                      <span>Actress &amp; Model</span>
                    </div>
                    <div className='quote'>
                      <i className='bx bxs-quote-left' />
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className='review mt-15'>
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                    </div>
                  </div>
                </div>
                <div className='slider-item'>
                  <div className='client-img'>
                    <img src='assets/img/client5.jpg' alt='client-1' />
                  </div>
                  <div className='content'>
                    <div className='client-info mb-30'>
                      <h3>Jordan Alin</h3>
                      <span>Bloger &amp; Youtuber</span>
                    </div>
                    <div className='quote'>
                      <i className='bx bxs-quote-left' />
                    </div>
                    <p>
                      The Personal Travel Agents Academy is a 12-month training
                      programme allowing anyone with no previous travel
                      experience to start their own travel business. This is an
                      advanced course to help build knowledge in travel and
                      develop sales skills.
                    </p>
                    <div className='review mt-15'>
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                      <i className='bx bxs-star' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='clients-img'>
            <img
              className='image image-1'
              src='assets/img/client1.jpg'
              alt="demo"
            />
            <img
              className='image image-2'
              src='assets/img/client2.jpg'
              alt="demo"
            />
            <img
              className='image image-3'
              src='assets/img/client3.jpg'
              alt="demo"
            />
            <img
              className='image image-4'
              src='assets/img/client4.jpg'
              alt="demo"
            />
            <img
              className='image image-5'
              src='assets/img/client5.jpg'
              alt="demo"
            />
          </div>
        </div>
        <div className='shape'>
          <img src='assets/img/shape1.png' alt='Background Shape' />
        </div>
      </section>
    </div>
  )
}
