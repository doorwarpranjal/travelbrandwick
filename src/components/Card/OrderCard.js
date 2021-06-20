import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PeopleIcon from '@material-ui/icons/People';
import { useEffect, useState } from "react";
export default function Card(props) {
  const [cardDetails,setCardDetails]=useState({tripId:{cardImage:""},people:0})
  let date,dateString;
  if(cardDetails){
    
    date= new Date(cardDetails.dateOn)
    dateString=date.toDateString()
  }
  useEffect(()=>{
    setCardDetails(props.cardItem)
    console.log(cardDetails,"people")
},[0])
  return (
    <div className=" card">
      
        <div className='p-3'>
        <span className="weight-6 p-4">
              {dateString
              }
            </span>
            <span className="weight-6 p-4">
                <PeopleIcon />
              0 
            </span>
            <span className="weight-6 p-4">
            <i class="fas fa-rupee-sign"></i>
           {" "}   {cardDetails.totalAmount
              }
            </span>
        </div>
      <div>
        <img
          className="card-img"
          src={cardDetails.tripId ?cardDetails.tripId.cardImage:""}
        />
      </div>
      <div className="card-text pb-1">
        <div className="row m-auto pt-3">
          <div className="col-6">
            <h6 className="content ">
                     <Link to={`/destination/${cardDetails.tripId._id}`}>
                            {cardDetails.tripId.tourPlace}
                            </Link>
                </h6>
          </div>
          <div className="col-6">
            <span className="color-orange">{cardDetails.tripId.tourDuration}</span>
          </div>
          
          <div className="col-12 col-md-8 m-auto p-2">
          <Link to={`/destination/${cardDetails.tripId._id}`}>
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
