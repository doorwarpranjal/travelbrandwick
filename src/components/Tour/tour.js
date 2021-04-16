import { Star } from "@material-ui/icons";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Tour() {
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
  return (
    <section id="heroTour">
      <div
        className="tour-bg mb-6 "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/163688/hiker-travel-trip-wander-163688.jpeg?cs=srgb&dl=pexels-pixabay-163688.jpg&fm=jpg')",
        }}
      >
        <div className="inner-div">
          <Star style={{ color: "orange" }} />
          <span> 8.5 Superb</span>
          <h2>Manali Heaven On Earth</h2>
          <span>
            <span className="price">$300</span>/ Person
          </span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12 mt-5 ">
            <h2 className="mb-4 font-weight-bold">Overview</h2>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. 5 Days
            </span>
            <div className="container mt-3">
              <div className="table row p-4 rounded-lg">
                <div className="col-4  border-right">
                  <i class="far fa-clock mr-2"></i> 5 Days
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
                    <th className=" standard f-size">New York City</th>
                  </tr>
                  <tr>
                    <th className="standard">Price:</th>
                    <th className=" standard f-size">$300</th>
                  </tr>
                  <tr>
                    <th className="standard">Discount</th>
                    <th className=" standard f-size">Applied</th>
                  </tr>
                  <tr>
                    <th className="standard">Include:</th>
                    <th className="ml-3">
                      <ul>
                        <li>Air fares</li>
                        <li>4 Nights Hotel Accomodation</li>
                        <li>Entrance Fees</li>
                      </ul>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <h2 className="mb-4 font-weight-bold">Tour Plan</h2>
              <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </span>
              <div className="row mt-6">
                <div className="col-2">
                  <span className="date-span rounded-circle">01</span>
                </div>
                <div className="col-10">
                  <span className="theme-color f-18">8:00 am to 10:00 am</span>
                  <h6 className="standard">
                    Day 1: Arrive South Africa Forest
                  </h6>

                  <span className="description">
                    Aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </span>
                </div>            
              </div>
              <div className="row mt-6">
                <div className="col-2">
                  <span className="date-span rounded-circle">02</span>
                </div>
                <div className="col-10">
                  <span className="theme-color f-18">8:00 am to 10:00 am</span>
                  <h6 className="standard">
                    Day 2: Arrive South Africa Forest
                  </h6>

                  <span className="description">
                    Aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </span>
                </div>            
              </div>
              <div className="row mt-6 mb-5">
                <div className="col-2">
                  <span className="date-span rounded-circle">03</span>
                </div>
                <div className="col-10">
                  <span className="theme-color f-18">8:00 am to 10:00 am</span>
                  <h6 className="standard">
                    Day 3: Arrive South Africa Forest
                  </h6>

                  <span className="description">
                    Aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </span>
                </div>            
              </div>
          
           
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="booking-div rounded-lg m-3">
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
                  {1000 + " Rs"} * {people} = {1000 * people}
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
                  // onClick={openPayModal}
                >
                  Proceed for Payment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
        <h2 className="mb-4 font-weight-bold">Gallery</h2>
      <div class="owl-carousel">
      <div class="item"><img src = "./assets/img/about1.jpg"/></div>
    <div class="item"><img src = "./assets/img/client1.jpg"/></div>
    <div class="item"><img src = "./assets/img/client2.jpg"/></div>
    <div class="item"><img src = "./assets/img/client3.jpg"/></div>
    
</div> </div>
      </div>{" "}
    </section>
  );
}
