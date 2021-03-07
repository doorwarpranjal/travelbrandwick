import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomeScreen/Home";
import About from "./components/About-us/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/Not-found";
import Contact from "./components/Contact-us/contact-us";
import LoginScreen from "./components/Auth/LoginScreen"
import RegisterScreen from "./components/Auth/RegisterScreen"
import ForgotPasswordScreen from "./components/Auth/ForgotPasswordScreen"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={About} />
          <Route path="/sign-in" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/forgot-password" exact component={ForgotPasswordScreen} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
