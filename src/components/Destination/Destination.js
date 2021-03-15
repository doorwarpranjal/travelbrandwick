import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllTours } from "../../API";
import {Pagination} from '@material-ui/lab'
export default function Destination() {
  //  const [isAuth, setIsAuth] = useState(true);
 
  const [allTours, setAllTours] = useState([]);
  const [pageValue,setPageValue]=useState(0)
  const [pageNumber,setPageNumber]=useState(1)
  useEffect(() => {
    getTours();
    // getTopTours();
  }, []);
  const getTours = async () => {
    let res = await getAllTours();
    if (res.status === 200) {
      //  console.log(res.data);
      setAllTours(res.data);
      let arrlength=res.data.length
      let pageNo=Math.round((arrlength-3)/3)
      setPageValue(pageNo)
      //console.log(allTours,pageValue,pageNo);
    } else {
      console.log("empty");
    }
  };
  
  return (
    <section id="heroDestination">
      <div className="page-title-area ptb-100">
        <div className="container">
          <div className="page-title-content">
            <h1>Destinations</h1>
            <ul>
              <li className="item">
                <Link to="/index">Home</Link>
              </li>
              <li className="item">
                <Link to="/destinations">
                  <i className="bx bx-chevrons-right"></i>Destinations
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-image">
          <img src="assets/img/page-title-area/destinations.jpg" alt="demo" />
        </div>
      </div>

      <section
        id="top-destination"
        className="top-destination-section pt-100 pb-70 bg-light"
      >
        <div className="container">
          <div className="section-title">
            <h2>Recently Added</h2>
            <p>
              Travel has helped us to understand the meaning of life and it has
              helped us become better people. Each time we travel, we see the
              world with new eyes.
            </p>
          </div>
          <div className="row">
            {allTours.map((item, index) => {
              if (index < 3) {
                return (
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
                        <Link to={`/destination-details/${item._id}`}>
                            {item.tourPlace}
                          </Link>
                        </h3>
                        {/* <div className="review">
                      <i className="bx bx-smile"></i>
                      <span>8.5</span>
                      <span>Superb</span>
                    </div> */}
                        <p>{item.description}</p>
                        <hr />
                        <ul className="list">
                          <li>
                            <i className="bx bx-time"></i>
                            {item.tourDuration}
                          </li>

                          <li>{item.price}</li>
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

      <section className="features-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="item-single mb-30">
                <i className="bx bx-calendar" style={{fontSize:'30px'}}></i>
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
                <i className="bx bxs-plane-take-off" style={{fontSize:'30px'}}></i>
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
                <i className="bx bx-money" style={{fontSize:'30px'}}></i>
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
        className="destination-section ptb-100 bg-light"
      >
        <div className="container">
          <div className="section-title">
            <h2>Tours</h2>
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
              if (index>2*pageNumber && index<2*pageNumber+7 ) {
                return (
                  <div
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
                        <Link to={`/destination-details/${item._id}`}>
                         
                            {item.tourPlace}
                          </Link>
                        </h3>
                        <div className="review">
                          <i className="bx bx-smile"></i>
                          <span>8.5</span>
                          <span>Superb</span>
                        </div>
                        <p>{item.description}</p>
                        <hr />
                        <ul className="list">
                          <li>
                            <i className="bx bx-time"></i>
                            {item.tourDuration}
                          </li>

                          <li>{item.price}</li>
                        </ul>
                      </div>
                      <div className="spacer"></div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="pagination text-center">
              


                <span className="page-numbers" aria-current="page">
<Pagination count={pageValue} color="secondary" onChange={(e,v)=>setPageNumber(v)} />
                  
                </span>
            </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
