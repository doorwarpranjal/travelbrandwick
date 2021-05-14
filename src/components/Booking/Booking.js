import { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from "react-router-dom";
import {
  getTourById,
  postComment as addTestimonial,
  postOrder,
} from "../../API";
import axios from "axios";
import Toast from "../Toast/Toast";
import showToast from "../Toast/showToast";
export default function Destination() {
  const [tripDate, settripDate] = useState("");
  const [tripTill, settripTill] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [note, setnote] = useState("");
  const [toastColor, setToastColor] = useState("green");
  const [toastText, setToastText] = useState("");
  const [tripDetails, setTripDetails] = useState({
    images: [],
    includes: [],
    testimonial: [],
  });
  const [people, setPeople] = useState(1);
  let parsms = useParams();
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
    console.log(validate())
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
  useEffect(() => {
    getTourByTourId(parsms.id);
    let token = JSON.parse(localStorage.getItem("recoil-persist"));
    if (token) {
      setIsAuth(true);
    }
  }, []);
  const getTourByTourId = async (id) => {
    console.log(id, parsms);
    let res = await getTourById(id);
    if (res.status === 200) {
      console.log(res.data);
      setTripDetails(res.data);
    } else {
      console.log("empty");
    }
  };
  return (
    <section id="heroDestination">
      <Toast color={toastColor} text={toastText} />
      <div className="page-title-area ptb-100">
        <div className="container">
          <div className="page-title-content">
            <h1>Booking</h1>
            <ul>
              <li className="item">
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-image">
          <img
            src="https://images.pexels.com/photos/1058958/pexels-photo-1058958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Demo Image"
          />
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
                    <div className="input-icon">
                      <i className="bx bx-user"></i>
                    </div>
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
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="bx bx-at"></i>
                    </div>
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
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      selected={tripDate}
                      placeholderText="Start Date"
                      onChange={(date) => settripDate(date)}
                    />{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      selected={tripTill}
                      placeholderText="End Date"
                      onChange={(date) => settripTill(date)}
                    />{" "}
                  </div>
                </div>
                <div className="col-md-6 m-auto">
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="bx bx-at"></i>
                    </div>
                    <input
                      type="number"
                      onChange={(e) => setPeople(e.target.value)}
                      className="form-control"
                      required=""
                      data-error="Please enter your email"
                      placeholder="No. of People"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="m-4 ml-3">
                    <h6>
                      {tripDetails.price + " Rs"} * {people} ={" "}
                      {tripDetails.price * people}
                    </h6>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="input-icon textarea">
                      <i className="bx bx-envelope"></i>
                    </div>
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
                      placeholder="Notes"
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <div id="msgSubmit" className="h5 text-center hidden"></div>
                  {isAuth ? (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={openPayModal}
                    >
                      Proceed for Payment
                    </button>
                  ) : (
                    <>
                      <Link to="/sign-in" className="btn btn-danger">
                        Unlock Payment Options
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
