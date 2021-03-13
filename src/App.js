import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomeScreen/Home";
import About from "./components/About-us/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/Not-found";
import Contact from "./components/Contact-us/contact-us";
import Destination from "./components/Destination/Destination";
import DestinationDetails from "./components/Destination/Destination-Details";
import LoginScreen from "./components/Auth/LoginScreen"
import Tours from "./components/Tours/Tours"
import TripOffers from "./components/Tours/TripOffers"
import RegisterScreen from "./components/Auth/RegisterScreen"
import ForgotPasswordScreen from "./components/Auth/ForgotPasswordScreen"
import NewPasswordScreen from "./components/Auth/NewPasswordScreen"
import Blog from "./components/BlogScreen/All-Blogs"
function App() {
 
  console.log()
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={About} />
          <Route path="/sign-in" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/forgot-password" component={ForgotPasswordScreen} />
          <Route path="/new-password/:id" exact component={NewPasswordScreen} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/destinations" component={Destination} />
          <Route path="/destination-details" component={DestinationDetails} />
          <Route path="/tours" component={Tours} />
          <Route path="/special-offers" component={TripOffers} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
