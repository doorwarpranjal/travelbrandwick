import { Rating } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarBorderBox from '@material-ui/icons/StarBorder';
import { getAllTours, getImages } from "../../API";
import Testimonial from '../Testimonials/Testimonial'


export default function Tours() {
  const [images, setImages] = useState([]);



  useEffect(() => {
    getAllImages();

  }, [1]);

  const getAllImages = async () => {
    let res = await getImages();
    if (res.status === 200) {
      console.log(res.data);
      setImages(res.data.Images);
    } else {
      console.log(res);
    }
  };



  return (
    <div>
      <div className="page-title-area ptb-100">
        <div className="container">
          <div className="page-title-content">
            <h1>Gallery</h1>
            <ul>
              <li className="item">
                <Link to="/">Home</Link>
              </li>
              <li className="item">
                <Link to="/tours">
                  <i className="bx bx-chevrons-right" />
                 Gallery
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
                        <h3 style={{ color: 'white' }}>
                          {item.tourPlace}
                        </h3>
                        <div className="review ">
                          <Rating
                            name="customized-empty"
                            defaultValue={item.rating}
                            max={5}
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
                          <h3 style={{ color: 'white' }}>
                            {item.tourPlace}
                          </h3>

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



      <Testimonial />



    </div>
  );
}
