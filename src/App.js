import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import DrawPage from "./pages/DrawPage";
// import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <Router>
        {/* <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/draw" component={DrawPage} exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;
