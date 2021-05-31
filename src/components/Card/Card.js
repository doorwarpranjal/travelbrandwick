import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";


export default function Card({ cardItem }) {


  return (
    <div className=" card">
      <div>
        <img className="card-img" src={cardItem.cardImage} />
      </div>
      <div className="card-text p-2 pb-1">
        <div className="row m-auto pt-3">
          <div className="col-6">
            <h6 className="content ">
              <Link to={`/destination/${cardItem._id}`}>
                {" "}
                {cardItem.tourPlace}
              </Link>
            </h6>
          </div>
          <div className="col-6 text-right">
            <span className="color-orange">{cardItem.tourDuration}</span>
          </div>
          <div className="col-12 d-flex justify-content-between py-3">
            <span className="weight-6">
              <LocationOnIcon /> {cardItem.location}
            </span>
            <span className="weight-6 ">
              <i class="fas fa-rupee-sign"></i> {cardItem.price}
            </span>
          </div>

          <div className="col-12 mb-2">
            <span className="weight-6 text-justify card-description-text">
              {cardItem.description}
            </span>
          </div>
          <br />
          <div className="col-12 col-md-8 m-auto p-1">
            <Link to={`/destination/${cardItem._id}`}>
              <button className="cta-btn border-none">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
