import React from "react";

import '../style/skills.scss';
import html from "../assets/Html5.jpg";
import css from "../assets/css3.png";
import js from "../assets/JavaScript.png";
import react from "../assets/ReactJs.png";
import reactrouting from "../assets/ReactRouting.png";
import sass from "../assets/Sass.png";
import node from "../assets/node.png";
import graphql from "../assets/Graphql.png";
import redux from "../assets/Redux.png";
import hooks from "../assets/ReactHooks.png";

export default function Skills() {
  return (
    <div className="container-skills">
      <h2 className="title"> SKILLS </h2>
      <div className="container-knowledge">
        <h3 className="sub-title">Acquired Knowledge</h3>
        <div className="container-acquired">
          <div className="container-img">
            <img src={html} alt="HTML5" />
          </div>
          <div className="container-img">
            <img src={css} alt="CSS3" />
          </div>
          <div className="container-img">
            <img src={js} alt="Java Script" />
          </div>
          <div className="container-img">
            <img src={sass} alt="Sass" />
          </div>
          <div className="container-img">
            <img src={react} alt="reactJs" />
          </div>
          <div className="container-img">
            <img src={reactrouting} alt="React Routing" />
          </div>
        </div>
        <h3 className="sub-title">In Learning</h3>
        <div className="container-inlearning">
          <div className="container-img">
            <img src={redux} alt="Redux" />
          </div>
          <div className="container-img">
            <img src={graphql} alt="Graphql" />
          </div>
          <div className="container-img">
            <img src={node} alt="Node JS" />
          </div>
          <div className="container-img">
            <img src={hooks} alt="Node JS" />
          </div>
        </div>
      </div>
    </div>
  );
}
