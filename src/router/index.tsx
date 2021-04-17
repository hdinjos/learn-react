import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../page/home";
import About from "../page/about";

function index() {
  return (
    <Router>
      <Link to="/about">About</Link>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default index;
