import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import DrawPage from "./pages/DrawPage";


const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/draw" component={DrawPage} exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;
