import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import { Link, useParams } from "react-router-dom";
import { getTourById,postComment as  addTestimonial} from "../../API";
import "react-datepicker/dist/react-datepicker.css";

export default function Destination() {
    const [tripDate, settripDate] = useState('');
    const [tripTill, settripTill] = useState('');
    const [isAuth,setIsAuth]=useState(false) 
    const [tripDetails, setTripDetails] = useState({images:[],includes:[],testimonial:[]});
  const [people,setPeople]=useState(1)
let parsms=useParams()

useEffect(()=>{
getTourByTourId(parsms.id)
let token=JSON.parse(localStorage.getItem('recoil-persist'))
if(token){
  setIsAuth(true)
}
},[])
const getTourByTourId=
  async (id) => {
    console.log(id,parsms)
    let res = await getTourById(id);
    if (res.status === 200) {
        console.log(res.data);
        setTripDetails(res.data)
    } else {
      console.log("empty");
    }
  };
  return (
    <section id="heroDestination">
  

<div className="page-title-area ptb-100">
<div className="container">
<div className="page-title-content">
<h1>Booking</h1>
<ul>
<li className="item"><Link href="/">Home</Link></li>
</ul>
</div>
</div>
<div className="bg-image">
<img src="https://images.pexels.com/photos/1058958/pexels-photo-1058958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Demo Image"/>
</div>
</div>


<div className="contact-section">
<div className="container">
<div className="main-form ptb-100">
<form id="contactForm">
<h3 className="sub-title">Booking</h3>
<div className="row">
<div className="col-md-6">
<div className="form-group">
<div className="input-icon"><i className='bx bx-user'></i></div>
<input type="text" name="Mobile" className="form-control" id="name"
 required="" data-error="Please enter your name" placeholder="Mobile Number" />
<div className="help-block with-errors"></div>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<div className="input-icon"><i className='bx bx-at'></i></div>
<input type="email" name="email" className="form-control" id="email" required="" data-error="Please enter your email" placeholder="Email" />
<div className="help-block with-errors"></div>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<DatePicker
                dateFormat="dd/MM/yyyy"
                className="form-control"
                selected={tripDate}
                placeholderText="Trip On"
                onChange={(date) => settripDate(date)}
              /> </div>
</div>
<div className="col-md-6">
<div className="form-group">
<DatePicker
                dateFormat="dd/MM/yyyy"
                className="form-control"
                selected={tripTill}
                placeholderText="Trip Till"
                onChange={(date) => settripTill(date)}
              /> </div>
</div>
<div className="col-md-6 m-auto">
<div className="form-group">
<div className="input-icon"><i className='bx bx-at'></i></div>
<input type="number" onChange={(e)=>setPeople(e.target.value)} className="form-control"
 required="" data-error="Please enter your email" placeholder="No. of People" />
<div className="help-block with-errors"></div>
</div>
</div>

<div className="col-md-12">
<div className="m-4">
     
 <h6>
 {tripDetails.price+" Rs"} * {people} = {tripDetails.price*people}
 </h6>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<div className="input-icon textarea"><i className='bx bx-envelope'></i></div>
<textarea name="message" id="message" className="form-control" cols="100" rows="6" 
required="" data-error="Please enter your message" placeholder="Notes"></textarea>
<div className="help-block with-errors"></div>
</div>
</div>
<div className="col-lg-12">
<button type="submit" className="btn-primary">Proceed for Payment</button>
<div id="msgSubmit" className="h5 text-center hidden"></div>
</div>
</div>
</form>
</div>
</div>
</div>  </section>
  );
}


