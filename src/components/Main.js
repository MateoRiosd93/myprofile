import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Achievements from "./Achievements";
import Footer from "./Footer";

import "../style/Main.scss";

function Router() {
  return (
    <div className="container-main">
      <div className="container-route">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Experience" component={Experience} />
          <Route path="/Education" component={Education} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Hobbies" component={Hobbies} />
          <Route path="/Achievements" component={Achievements} />
        </Switch>
      </div>
      <div className="contaienr-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Router;
