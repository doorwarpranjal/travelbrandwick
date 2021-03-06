
import Home from './components/HomeScreen/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
<Router>
  <Navbar/>
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
</Router>
    </div>
  );
}

export default App;
