import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState,useEffect} from 'react'
import Home from "./components/HomeScreen/Home";
import About from "./components/About-us/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/Not-found";
import Contact from "./components/Contact-us/contact-us";
import Destination from "./components/Destination/Destination";

import LoginScreen from "./components/Auth/LoginScreen"
import Tours from "./components/Tours/Tours"
import TripOffers from "./components/Tours/TripOffers"
import RegisterScreen from "./components/Auth/RegisterScreen"
import ForgotPasswordScreen from "./components/Auth/ForgotPasswordScreen"
import NewPasswordScreen from "./components/Auth/NewPasswordScreen"
import Blog from "./components/BlogScreen/All-Blogs"
import BlogDetails from "./components/BlogScreen/Blog"
import Booking from './components/Booking/Booking'
import Tour from './components/Tour/tour'
import TourByCategory from './components/Tour/tourByCategory'
import ScrollToTop from './components/scrollToTop'
import Cart from './components/MyCart/Cart'
function App() {


  const [isNavbarOnHomepage,setNavbarOnHomePage]=useState(false)
 

  //check if navbar is on homepage or not
  useEffect(() => {
    if(window.location.pathname=='/'){
      return setNavbarOnHomePage(true)
    }else{
      return setNavbarOnHomePage(false)
    }
    return () => {
    
    };
  }, []);


  return (
    <div className="App">
      <Router>
    
        <ScrollToTop/>
   

        <Navbar isNavbarOnHomepage={isNavbarOnHomepage} />

        <Switch>
          <Route path="/" exact component={Home} />
        
          <Route path="/about-us" exact component={About} />
          <Route path="/destinations" component={Destination} />
          <Route path="/toursbycategory/:id" component={TourByCategory} />
          {/* <Route path="/booking/:id/:tourid" component={Booking} /> */}
          <Route path="/sign-in" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/forgot-password" component={ForgotPasswordScreen} />
          <Route path="/new-password/:id" exact component={NewPasswordScreen} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/destination/:id" component={Tour} />
          <Route path="/blog/:page" component={Blog} />
          <Route path="/blog/" component={Blog} />
          <Route path="/blog-details/:id" exact component={BlogDetails} />
          {/* <Route path="/destination-details/:tourId" component={DestinationDetails} /> */}
          <Route path="/gallery" component={Tours} />
          <Route path="/special-offers" component={TripOffers} />
          <Route path="/cart" component={Cart} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
