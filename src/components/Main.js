import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Hobbies from "./Hobbies"
import Achievements from "./Achievements";

function Router() {
  return (
    <div>
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
  );
}

export default Router;
