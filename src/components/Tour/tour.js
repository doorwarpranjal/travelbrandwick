import { Star } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { userState } from "../../Atom";
import { useRecoilState } from "recoil";
import {
  getTourById,
  postComment as addTestimonial,
  postOrder,
} from "../../API";
import DatePicker from "react-datepicker";
import Toast from "../Toast/Toast";
import showToast from "../Toast/showToast";
import "react-datepicker/dist/react-datepicker.css";
import "./tour.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MenuItem, Select } from "@material-ui/core";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  navs: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function Tour() {
  const [tripDate, settripDate] = useState("");
  const [showReplies, setShowReplies] = useState(false);
  const [tripTill, settripTill] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [note, setnote] = useState("");
  const [toastColor, setToastColor] = useState("green");
  const [toastText, setToastText] = useState("");
  const [myUser, setmyUser] = useRecoilState(userState);
  const [modalHeading, setmodalHeading] = useState("");
  const [ListType, setListType] = useState("");
  const [modalBody, setmodalBody] = useState("");
  useEffect(() => {
    if (myUser) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [myUser]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showList, setShowList] = useState(false);

  const handleCloseList = () => setShowList(false);
  const handleShowList = () => setShowList(true);
  const [tripDetails, setTripDetails] = useState({
    images: [],
    generalInfo: [],
    includes: [],
    testimonial: [],
  });
  // const [isAuth,setIsAuth]=useState(false)
  const [value, setValue] = useState(2);
  const [postComment, setPostComment] = useState("");
  const validate = () => {
    //let isValid=true;
    if (tripTill === "") {
      setToastColor("red");
      setToastText("Till Date Required");
      showToast();
      return false;
    } else if (tripDate === "") {
      setToastColor("red");
      setToastText("From Required");
      showToast();
      return false;
    } else if (email === "") {
      setToastColor("red");
      setToastText("email is Required");
      showToast();
      return false;
    } else if (mobile === "") {
      setToastColor("red");
      setToastText("Mobile is Required");
      showToast();
      return false;
    } else {
      return true;
    }
  };
  const openPayModal = async (e) => {
    e.preventDefault();
    let amount = people * tripDetails.price;
    //  console.log(validate())
    if (validate() === true) {
      amount = amount * 100;
      amount = Math.ceil(amount);
      var options = {
        key: "rzp_test_tdnTzNT1KfkDD6", // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "the Mountmonks",
        image:
          "https://res.cloudinary.com/dvu7miswu/image/upload/v1616579166/shop/cgumdqpcqrnquxtkbrpa.jpg",
        order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          let data = {
            tripId: tripDetails._id,
            dateOn: tripDate,
    
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
  let parsms = useParams();

  useEffect(() => {
    getTourByTourId(parsms.id);
  }, []);

  const postMyComment = async (e) => {
    e.preventDefault();

    if (isAuth) {
      let res = await addTestimonial(parsms.id, {
        reviewContent: postComment,
        rating: value,
      });
      if (res.status === 200) {
        // console.log(res.data);
        // setTripDetails(res.data)
      } else {
        console.log(res.response);
      }
    } else {
      alert("Login First to post comment !");
    }
  };

  const getTourByTourId = async (id) => {
    //  console.log(id)
    let res = await getTourById(id);
    if (res.status === 200) {
      // console.log(res.data);
      setTripDetails(res.data);
    } else {
      console.log("empty");
      alert("Tour bot found");
    }
  };

  const [people, setPeople] = useState(1);
  return (
    <section id="heroTour">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>
            {modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='container'>
          <span className='span-modal-body'>
            {modalBody}
            </span>
        </div></Modal.Body>
      </Modal>{" "}
      <Modal show={showList} onHide={handleCloseList}>
        <Modal.Header closeButton>
          <Modal.Title>{ListType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ListType === "Exclusion" ? (
            <div className='container'>

            <ul>
              {tripDetails.Exclusion &&
                tripDetails.Exclusion.map((item, index) => {
                  return <h6>
                  <li>{item}</li>
                  </h6>
                })}
            </ul>
                </div>
          ) : (
            <div className='container'>

            <ul>
              {tripDetails.includes &&
                tripDetails.includes.map((item, index) => {
                  return <h6>
                    <li>{item}</li>
                    </h6>
                })}
            </ul>
                </div>
          )}
        </Modal.Body>
      </Modal>{" "}
      <Toast color={toastColor} text={toastText} />
      <div
        className="tour-bg mb-6 "
        style={{
          backgroundImage: `url(${tripDetails.thumbnailImage})`,
          backgroundPosition: "center",
        }}
      >
        <div className="inner-div">
          <Star size={30} className="theme-color f-18" />
          <span className="theme-color "> 8.5 Superb</span>
          <h2>{tripDetails.tourPlace}</h2>
          <span>
            <span className="price"> Rs. {tripDetails.price} </span>/ Person
          </span>
        </div>
      </div>
      <div className="container main-container-left-side">
        <div className="row">
          <div className="col-md-8 col-12 mt-5 ">
            <h2 className="mb-4 font-weight-bold">Overview</h2>
            <span className="description">{tripDetails.description}</span>

            <div className=" mt-3">
              <div className="table text-center row  rounded-lg">
                <div className="col-4  border-right">
                  <i class="far fa-clock"></i> {tripDetails.tourDuration}
                </div>
                <div className="col-4 ">Rs. {tripDetails.price}</div>
                <div className="col-4 border-left">
                  <i class="far fa-user "></i> Age 15+
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 col-md-4 d-flex p-2">
                <button
                  onClick={() => {
                    setmodalHeading(" Accomodation");
                    setmodalBody(tripDetails.Accommodation);
                    handleShow();
                  }}
                  className="modal-btn"
                >
                  Accomodation {"   "}
                  <span className="float-right">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </button>
              </div>
              <div className="col-12 col-md-4 d-flex p-2">
                <button
                  onClick={() => {
                    setmodalHeading("Things To Carry");
                    setmodalBody(tripDetails.thingsToCarry);
                    handleShow();
                  }}
                  className="modal-btn"
                >
                  Things To Carry {"   "}
                  <span className="float-right">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </button>
              </div>
              <div className="col-12 col-md-4 d-flex p-2">
                <button
                  onClick={() => {
                    setListType("Inclusion");
                    handleShowList();
                  }}
                  className="modal-btn"
                >
                  Inclusion
                  <span className="float-right">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </button>
              </div>
              <div className="col-12 col-md-4 d-flex p-2">
                <button
                  onClick={() => {
                    setListType("Exclusion");
                    handleShowList();
                  }}
                  className="modal-btn"
                >
                  Exclusion
                  <span className="float-right">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </button>
              </div>
              <div className="col-12 col-md-8 d-flex p-2">
                <button
                  onClick={() => {
                    setmodalHeading("Terms And Conditions");
                    setmodalBody(tripDetails.termsandConditions);
                    handleShow();
                  }}
                  className="modal-btn"
                >
                  Terms And Conditions {"   "}
                  <span className="float-right">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="mb-4 font-weight-bold">Tour Plan</h2>

              {tripDetails.generalInfo.map((item, index) => {
                return (
                  <div className="row mt-4 pb-4 ">
                    <div className="col-3 ">
                      <span className="date-span rounded-circle">
                        {index + 1}
                      </span>
                    </div>
                    <div className="col-9">
                      <h6 className="standard">
                        Day {index + 1}: {item.title}
                      </h6>

                      <span className="theme-color f-18">{item.time}</span>
                      <br />

                      <span className="description">{item.activities}</span>
                    </div>
                  </div>
                );
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
                  data-error="Please enter your email correctly"
                  placeholder="Email (optional)"
                />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group  mb-4">
              <select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          className="form-control"
          value={""}
          onChange={(e)=>settripDate(e.target.value)}
        >
          <option value="">
            Choose Date
          </option>
          {tripDetails.dates.map(item=>{
            return(

              <option value={item}>{item}</option>
              )})}
     
        </select>
      
              </div>
            
              <div className="form-group  mb-3">
                <label>Number of Person</label>
                <input
                  type="number"
                  onChange={(e) => setPeople(e.target.value)}
                  className="form-control"
                  defaultValue={1}
                  data-error="Please Choose Number of people correctly"
                  placeholder="No. of People"
                />
                <div className="help-block with-errors"></div>
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
                  placeholder="Any Other Message"
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group">
                <h6>Payment Summary :</h6>
                <br />

                <p>Tour Price : Rs {tripDetails.price}</p>
                <p>Total Persons : {people} persons</p>
                <p>Total Price : Rs {tripDetails.price * people}</p>
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
            <Slider {...settings}>
              {tripDetails.images.map((item, index) => {
                //console.log(index)
                return (
                  <div key={index}>
                    <img src={item} className="gallery-image" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="mt-5">
          <div className="row ">
            <div className="col-lg-6 col-md-8  comment-reply">
              <form
                id="commentForm"
                className="comment-form shadow-sm p-3  bg-white rounded m-auto"
              >
                {tripDetails.testimonial.map((item, index) => {
                  return (
                    <ol className="comment-list" key={index}>
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author">
                            <img
                              src={
                                "/assets/img/blog/author1.jpg" ||
                                item.reviewBy.profileImg
                              }
                              alt="demo"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="comment-metadata">
                              <h4 className="name">{item.reviewBy.name}</h4>
                            </div>
                            <p>{item.reviewContent}</p>
                            <ul className="list">
                              {/* <li><i className='bx bx-heart'></i>Likes</li> */}
                              {/* <li onClick={()=>setShowReplies(!showReplies)}><i className='bx bx-reply' ></i>Reply</li> */}
                            </ul>
                          </div>
                        </div>
                        {/* <ol className="children">
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
</ol> */}
                      </li>
                    </ol>
                  );
                })}
                <h2 className="sub-title mb-4 font-weight-bold">
                  Share Review
                </h2>
                <div className="row">
                  <div className="col-sm-12 col-lg-8 col-xs-12">
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      max={10}
                    />
                    <div className="input-group">
                      <div className="input-icon textarea">
                        <i className="bx bx-envelope"></i>
                      </div>
                      <textarea
                        name="message"
                        onChange={(e) => setPostComment(e.target.value)}
                        className="form-control"
                        disabled={!isAuth}
                        placeholder="Write Comment"
                        required="required"
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {isAuth ? (
                  <button
                    type="submit"
                    className="btn-primary"
                    onClick={postMyComment}
                  >
                    Post Review{" "}
                  </button>
                ) : (
                  <Link to="/sign-in">
                    <button className="btn-primary" onClick={postMyComment}>
                      LOGIN{" "}
                    </button>
                  </Link>
                )}
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
