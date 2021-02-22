import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Facts from "./pages/Facts/Facts";
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/facts">
            <Facts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;