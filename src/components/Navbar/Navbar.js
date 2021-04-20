import './Navbar.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const localData = JSON.parse(localStorage.getItem('recoil-persist'))

  const logoutHandler=()=>{
    localStorage.removeItem('recoil-persist')
    window.location.reload()
  }
  //console.log(localData.Travel_user)
  useEffect(()=>{

    if(localData!==null){
      
     setIsAuth(true)
    }
    else{
      setIsAuth(false)
    }
  },[localData])
  return (
    <section id="hero-navbar">
      <div className="main-navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <Link to="/">
                  <img style={{width:'40px'}} 
                  src="https://res.cloudinary.com/dvu7miswu/image/upload/v1618921323/tn5jlcs6xdfqtuqiohjy.png" alt="logo" />
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
                <img style={{width:'60px'}} src="https://res.cloudinary.com/dvu7miswu/image/upload/v1618921323/tn5jlcs6xdfqtuqiohjy.png" alt="Logo" />
              </Link>
              <div className="collapse navbar-collapse mean-menu">
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
                    <Link to="#" className="nav-link toggle">
                      Gallery<i className="bx bxs-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/gallery" className="nav-link">
                          Gallery
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/special-offers" className="nav-link">
                          Trip Offers
                        </Link>
                      </li>
                    </ul>
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
                {isAuth?
                <>
                <li className="nav-item" >
                <Link to="#" onClick={logoutHandler} className="nav-link">
                  Logout
                </Link>
              </li>
              </>
                :
                <li className="nav-item" >
                <div className="cart">
                  <Link to="/sign-in" className="nav-link toggle">
                    Sign-in <i className="fas fa-sign-in-alt " ></i>
                  </Link>
                </div>
                </li>
              }  </ul>
              
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
