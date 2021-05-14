import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PeopleIcon from '@material-ui/icons/People';
export default function Card({cardItem}) {
    console.log(cardItem)
    let date= new Date(cardItem.dateOn)
    let dateString=date.toDateString()
  return (
    <div className=" card">
        <div className='p-3'>
        <span className="weight-6 p-4">
              {dateString
              }
            </span>
            <span className="weight-6 p-4">
                <PeopleIcon />
              {cardItem.people
              }
            </span>
            <span className="weight-6 p-4">
            <i class="fas fa-rupee-sign"></i>
           {" "}   {cardItem.totalAmount
              }
            </span>
        </div>
      <div>
        <img
          className="card-img"
          src={cardItem.tripId.cardImage}
        />
      </div>
      <div className="card-text pb-1">
        <div className="row m-auto pt-3">
          <div className="col-8">
            <h6 className="content ">
                     <Link to={`/destination/${cardItem.tripId._id}`}>
                            {cardItem.tripId.tourPlace}
                            </Link>
                </h6>
          </div>
          <div className="col-4">
            <span className="color-orange">{cardItem.tripId.tourDuration}</span>
          </div>
          
          <div className="col-12 col-md-8 m-auto p-2">
          <Link to={`/destination/${cardItem.tripId._id}`}>
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
