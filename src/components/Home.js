import React from "react";

import "../style/Home.scss";

export default function Home() {
  return (
    <div className="container-home">
      <h2 className="title-home"> HOME </h2>
      <div className="container-name-information">
        <h1 className="name">
          MATEO <span className="lastnames">RIOS DIAZ</span>
        </h1>
        <div className="container-information">
          <div>
            <span className="ubication">Medellin - Antioquia</span>
            <span className="celphone">{`(+57) 310 425 6562`}</span>
          </div>
          <span className="email">mateorios993@gmail.com</span>
        </div>
      </div>
      <div className="container-profession">
        <h2 className="profession">Software Engineer</h2>
        <h2 className="profession">Frontend Developer</h2>
      </div>
    </div>
  );
}
