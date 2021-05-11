import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StarIcon from '@material-ui/icons/Star';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
export default function Card({cardItem}) {
  return (
    <div className=" card">
      <div>
        <img
          className="card-img"
          src={cardItem.data.cardImage}
        />
      </div>
      <div className="card-text">
        <div className="row m-auto pt-3">
          <div className="col-8">
            <h6 className="content ">
                     <Link to={`/destination/${cardItem._id}`}>
                            {cardItem.data.tourPlace}
                            </Link>
                </h6>
          </div>
          <div className="col-4">
            <span className="color-orange">{cardItem.data.tourDuration}</span>
          </div>
          <div className="col-12 p-2">
            <span className="weight-6">
              <LocationOnIcon /> {cardItem.data.location}
            </span>
            <span className="weight-6 " style={{ marginLeft: "15px" }}>
              <AttachMoneyIcon/> {cardItem.data.price}
            </span>
            <span className="review weight-6  ml-20" style={{ marginLeft: "15px" }}>
                             <StarIcon/>
                             <span >
                       {cardItem.avgRating>4?
                               Math.floor(cardItem.avgRating)
                            :"5" }
                             </span>{" "}
                             <span >
                               {cardItem.avgRating > 8
                                 ? " Great"
                                 : cardItem.avgRating > 5
                                 ? " Superb"
                                 : "Ok"}
                             </span>
                           </span>
          </div>
          <div className="col-12">
            <span className="weight-6">
            {cardItem.data.description}
            </span>
            
          </div>
          <div className="col-12 col-md-8 m-auto p-2">
          <Link to={`/destination/${cardItem._id}`}>
            <button className='cta-btn border-none'>
                View Details
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
