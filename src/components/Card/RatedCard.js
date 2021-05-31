import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StarIcon from "@material-ui/icons/Star";
import AttachMoneyIcon from "../../assets/fa_inr.svg";
import { Money } from "@material-ui/icons";

export default function Card({ cardItem }) {



  return (
    <div className="card pb-2">
      <img className="card-img" src={cardItem.data.cardImage} />

      <div className="card-text pb-1">
        <div className="row m-auto pt-3">
          <div className="col-6">
            <h6 className="content ">
              <Link to={`/destination/${cardItem._id}`}>
                {cardItem.data.tourPlace}
              </Link>
            </h6>
          </div>
          <div className="col-6 text-right">
            <span className="color-orange">{cardItem.data.tourDuration}</span>
          </div>

          <div className="col-12 p-2 px-3 justify-content-between d-flex">
            <span className="weight-6">
              <LocationOnIcon className="icon-margin-top" />{" "}
              {cardItem.data.location}
            </span>
            <span className="weight-6 ">
             <Money/>
              {cardItem.data.price}
            </span>
            <span className="review weight-6  ml-20">
              <StarIcon className="icon-margin-top" />
              <span>
                {cardItem.avgRating > 4 ? Math.floor(cardItem.avgRating) : "5"}
              </span>
            </span>
          </div>

          <div className="col-12 mb-2">
            <span className="weight-6 text-justify card-description-text">
              {cardItem.description}
           </span>
          </div>

          <div className="col-12 col-md-8 m-auto p-2 mt-2">
            <Link to={`/destination/${cardItem._id}`}>
              <button className="cta-btn ">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
