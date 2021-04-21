import { Star } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTourById,postComment as  addTestimonial,postOrder} from "../../API";
import DatePicker from "react-datepicker";
import Toast from "../Toast/Toast";
import showToast from "../Toast/showToast";
import "react-datepicker/dist/react-datepicker.css";
export default function Tour() {
  const [tripDate, settripDate] = useState("");
  const [showReplies,setShowReplies]=useState(false)
  const [tripTill, settripTill] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [note, setnote] = useState("");
  const [toastColor, setToastColor] = useState("green");
  const [toastText, setToastText] = useState("");
  const [tripDetails, setTripDetails] = useState({
    images: [],generalInfo:[],
    includes: [],
    testimonial: [],
  });
 // const [isAuth,setIsAuth]=useState(false) 
  const [value, setValue] = useState(2);
  const [postComment,setPostComment]=useState("")
  const validate=()=>{
    //let isValid=true;
    if(tripTill===''){
     setToastColor("red");
     setToastText("Till Date Required");
     showToast();
     return false
 
    }
    else if(tripDate===''){
     setToastColor("red");
     setToastText("From Required");
     showToast();
     return false
 
    }
    else if(email===''){
     setToastColor("red");
     setToastText("email is Required");
     showToast();
     return false
 
    }
    else if(mobile==='')
 {
   setToastColor("red");
     setToastText("Mobile is Required");
     showToast();
     return false
 } 
 else{
   return true
 }
 }
  const openPayModal = async (e) => {
    e.preventDefault();
    let amount = people * tripDetails.price;
  //  console.log(validate())
    if (validate()===true) {
      amount = amount * 100;
      amount = Math.ceil(amount);
      var options = {
        key: "rzp_test_tdnTzNT1KfkDD6", // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Travel Brandwick",
        image:
          "https://res.cloudinary.com/dvu7miswu/image/upload/v1616579166/shop/cgumdqpcqrnquxtkbrpa.jpg",
        order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          let data = {
            tripId: tripDetails._id,
            dateOn: tripDate,
            dateTill: tripTill,
            note: note,
            email: email,
            mobile: mobile,
            totalAmount: amount,
            paymentId: response.razorpay_payment_id,
            people: people,
          };
          let res = await postOrder(data);
          if (res.status === 200) {
            setToastColor("green");
            setToastText("Order Created");
            showToast();
          } else {
            setToastColor("red");
            setToastText("Something went Wrong");
            showToast();
          }
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
  };
let parsms=useParams()

useEffect(()=>{
getTourByTourId(parsms.id)
let token=JSON.parse(localStorage.getItem('recoil-persist'))
if(token){
  setIsAuth(true)
}
},[])
const postMyComment=async (e)=>{
  e.preventDefault()
let res=await addTestimonial(parsms.id,{reviewContent:postComment,rating:value})
if (res.status === 200) {
  console.log(res.data);
 // setTripDetails(res.data)
} else {
console.log(res.response)
}
}
const getTourByTourId=
  async (id) => {
    console.log(id)
    let res = await getTourById(id);
    if (res.status === 200) {
        console.log(res.data);
        setTripDetails(res.data)
    } else {
      console.log("empty");
    }
  };

  const [people, setPeople] = useState(1);
  return (
    <section id="heroTour">
       <Toast color={toastColor} text={toastText} />
      <div
        className="tour-bg mb-6 "
        style={{
          backgroundImage:
            `url(${tripDetails.thumbnailImage})`,     }}
      >
        <div className="inner-div">
          <Star size={30} className='theme-color f-18' />
          <span className='theme-color '> 8.5 Superb</span>
          <h2>{tripDetails.tourPlace}</h2>
          <span>
            <span className="price"> Rs. {tripDetails.price} </span>/ Person
          </span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12 mt-5 ">
            <h2 className="mb-4 font-weight-bold">Overview</h2>
            <span className="description">
              {tripDetails.description}
            </span>
            <div className="container mt-3">
              <div className="table text-center row p-4 rounded-lg">
                <div className="col-4  border-right">
                  <i class="far fa-clock mr-2"></i> {tripDetails.tourDuration}
                </div>
                <div className="col-4 border-right">
                  <i class="fas fa-percentage mr-2"></i> Discount
                </div>
                <div className="col-4 ">
                  <i class="far fa-user mr-2"></i> Age 15+
                </div>
              </div>
            </div>
            <div className="mr-4">
              <table class="table table-bordered ">
                <tbody>
                  <tr>
                    <th className="standard">Destination:</th>
                    <th className=" standard f-size">{tripDetails.tourPlace}</th>
                  </tr>
                  <tr>
                    <th className="standard">Price:</th>
                    <th className=" standard f-size">Rs. {tripDetails.price} </th>
                  </tr>
                  <tr>
                    <th className="standard">Discount</th>
                    <th className=" standard f-size">Applied</th>
                  </tr>
                  <tr>
                    <th className="standard">Include:</th>
                    <th className="ml-3">
                      <ul>
                        {tripDetails.includes.map((item,index)=>{
                          return(
                            <li>{item}</li>
                          )
                        })}
                        
                      </ul>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <h2 className="mb-4 font-weight-bold">Tour Plan</h2>
              {/* <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </span> */}
              {tripDetails.generalInfo.map((item,index)=>{
                return(
                  <div className="row mt-6">
                  <div className=" col-2 mt-3">
                    <span className="date-span rounded-circle">{index+1}</span>
                  </div>
                  <div className="col-10">
                    <span className="theme-color f-18">{item.time}</span>
                    <h6 className="standard">
                      Day {index+1}: Arrive South Africa Forest
                    </h6>
  
                    <span className="description">
                   {item.activities}
                    </span>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="booking-div rounded-lg ">
              <div>
                <h4 className="standard mb-4">Book This Trip</h4>
              </div>
              <div>
                <div className="form-group mb-4 ">
                  <input
                    type="text"
                    name="Mobile"
                    className="form-control"
                    id="name"
                    required=""
                    data-error="Please enter your Mobile Number"
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    placeholder="Mobile Number"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="form-group  mb-4">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  required=""
                  data-error="Please enter your email"
                  placeholder="Email"
                />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group  mb-4">
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                  selected={tripDate}
                  placeholderText="Trip On"
                  onChange={(date) => settripDate(date)}
                />{" "}
              </div>
              <div className=" ">
                <div className="form-group  mb-4">
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                    selected={tripTill}
                    placeholderText="Trip Till"
                    onChange={(date) => settripTill(date)}
                  />{" "}
                </div>
              </div>

              <div className="form-group  mb-3">
                <input
                  type="number"
                  onChange={(e) => setPeople(e.target.value)}
                  className="form-control"
                  defaultValue={1}
                  data-error="Please enter your email"
                  placeholder="No. of People"
                />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <h5>
                  {tripDetails.price + " Rs"} * {people} = {tripDetails.price * people}
                </h5>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  onChange={(e) => {
                    setnote(e.target.value);
                  }}
                  className="form-control"
                  cols="100"
                  rows="6"
                  required=""
                  data-error="Please enter your message"
                  placeholder="Message"
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn cta-btn"
                  style={{ width: "100%" }}
                   onClick={openPayModal}
                >
                  Proceed for Payment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="container">
            <h2 className="mb-4 font-weight-bold">Gallery</h2>
            <div class="owl-carousel">
              {tripDetails.images.map((item,index)=>{
                return(
                  <div className="item" key={index}><img src={item} /></div>
                )
              })}
  
              
             </div>{" "}
          </div>
        </div>
      
        <div className="mt-5">
          <div className="row ">
            <div className=" col-8  comment-reply">
<form id="commentForm" className="comment-form shadow-sm p-3  bg-white rounded m-auto">
{tripDetails.testimonial.map((item,index)=>{
  return (
    <ol className="comment-list" key={index}>
<li className="comment">
<div className="comment-body">
<div className="comment-author">
<img src={"/assets/img/blog/author1.jpg"|| item.reviewBy.profileImg} alt="demo" />
</div>
<div className="comment-content">
<div className="comment-metadata">
<h4 className="name">{item.reviewBy.name}</h4>
</div>
<p>
{item.reviewContent}</p>
<ul className="list">
{/* <li><i className='bx bx-heart'></i>Likes</li> */}
<li onClick={()=>setShowReplies(!showReplies)}><i className='bx bx-reply' ></i>Reply</li>

</ul>
</div>
</div>
<ol className="children">
  {showReplies?
  
  <li className="comment">
<div className="comment-body">
<div className="comment-author">
<img src="/assets/img/blog/author2.jpg" alt="demo" />
</div>
<form>
 <div className="form-group form-inline">
<input name="message" className="form-control" placeholder="Write a reply" required="required"/>
<button type="submit" className="btn-primary">
Send
</button>
</div>
</form>
</div>
</li>
:null}
</ol>
</li>
</ol>

  )
})}
<h2 className="sub-title mb-4 font-weight-bold">Post comment</h2>
<div className="row">
<div className="col-sm-12 col-xs-12">
<Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          max={10}
        />
<div className="input-group">
<div className="input-icon textarea"><i className='bx bx-envelope'></i></div>
<textarea name="message"
  onChange={(e)=>setPostComment(e.target.value)} 
className="form-control" placeholder="Write Comment" required="required" rows="6"></textarea>
</div>
</div>
</div>
<button type="submit" className="btn-primary" 
 onClick={postMyComment}
>
Post comment
</button>
</form>:<> <div>
<div className='lock'> <h3 className="sub-title " style={{color:'white'}}>Post comment</h3><i class="fas fa-lock"  style={{color:'white'}}> </i>
<h2> <Link to='/sign-in' style={{color:'white'}}> Login</Link></h2>
</div>
</div> </>
</div>
   </div>
        </div>
    
      </div>{" "}
    </section>
  );
}