import React from "react";

import "../style/Footer.scss";
import "../icons/style.css";

function Footer() {
  return (
    <div className="container-follow">
      <a
        className="icon-follow"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/mateo-rios-16458b186"
      >
        <span className="icon-linkedin2 icon" />
      </a>
      <a
        className="icon-follow"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/MateoRiosd93"
      >
        <span className="icon-github icon" />
      </a>
      <a
        className="icon-follow"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/mateorios.dev/"
      >
        <span className="icon-instagram icon" />
      </a>
    </div>
  );
}

export default Footer;
