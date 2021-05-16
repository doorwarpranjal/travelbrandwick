import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo1.png";
import "./Navbar.css";

export default function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const localData = JSON.parse(localStorage.getItem("recoil-persist"));
const location =useLocation()
console.log(location)

const [isNavbarOnHomepage,setNavbarOnHomePage]=useState(false)


  const logoutHandler = () => {
    localStorage.removeItem("recoil-persist");
    window.location.reload();
  };
  //console.log(localData.Travel_user)
  useEffect(() => {
    if (localData !== null) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    if(location.pathname==='/'){
      setNavbarOnHomePage(true)
    }
    else{
      setNavbarOnHomePage(false)
    }
  }, [localData]);

  return (
    <section id="hero-navbar">
      <div className="main-navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <Link to="/">
                  <img
                    src={Logo}
                    style={{ width: "10px !important" }}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="cart responsive">
                <Link to="/cart" className="cart-btn">
                  <i className="bx bx-cart"></i>
                  <span className="badge">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="/">
                <img
                  style={{ width: "60px" }}
                  src="https://res.cloudinary.com/dvu7miswu/image/upload/v1618921323/tn5jlcs6xdfqtuqiohjy.png"
                  alt="Logo"
                />
              </Link>
              <div className="collapse navbar-collapse mean-menu">
                {isNavbarOnHomepage && (
                  <ul className="navbar-nav ml-auto homepage-navbar-ul">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active toggle">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/destinations" className="nav-link">
                        Destinations
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/gallery" className="nav-link">
                        Gallery
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/blog" className="nav-link">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about-us" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact-us" className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                    {isAuth ? (
                      <>
                        <div className="cart">
                          <Link to="/cart" className="cart-btn">
                            <i className="bx bx-cart"></i>
                            <span className="badge">0</span>
                          </Link>
                        </div>
                        <li className="nav-item">
                          <Link
                            to="#"
                            onClick={logoutHandler}
                            className="nav-link"
                          >
                            Logout
                          </Link>
                        </li>
                      </>
                    ) : (
                      <li className="nav-item">
                        <div className="cart">
                          <Link to="/sign-in" className="nav-link toggle">
                           Login <i className="fas fa-sign-in-alt "></i>
                          </Link>
                        </div>
                      </li>
                    )}{" "}
                  </ul>
                )}

                {/* if navbar is not on homepage show this ul  */}

                {!isNavbarOnHomepage && (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active toggle">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/destinations" className="nav-link">
                        Destinations
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/gallery" className="nav-link">
                        Gallery
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/blog" className="nav-link">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about-us" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact-us" className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                    {isAuth ? (
                      <>
                        <div className="cart">
                          <Link to="/cart" className="cart-btn">
                            <i className="bx bx-cart"></i>
                            <span className="badge">0</span>
                          </Link>
                        </div>
                        <li className="nav-item">
                          <Link
                            to="#"
                            onClick={logoutHandler}
                            className="nav-link"
                          >
                            Logout
                          </Link>
                        </li>
                      </>
                    ) : (
                      <li className="nav-item">
                        <div className="cart">
                          <Link to="/sign-in" className="nav-link toggle">
                            Login <i className="fas fa-sign-in-alt "></i>
                          </Link>
                        </div>
                      </li>
                    )}{" "}
                  </ul>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
