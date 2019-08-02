import React from "react";
import { Link } from "react-router-dom";
import image from '../assets/me.png';

import '../style/Header.scss';

function Header() {
  return (
    <div className="container-header">
      <div className="container-image">
        <img className="image-profile" src={image} alt="Mateo Rios Diaz"/>
      </div>
      <label className="hamburger">
        <input type="checkbox" className="hamburger_checkbox"/>
        <div className="hamburger_line"></div>
        <div className="hamburger_line"></div>
        <div className="hamburger_line"></div>
      </label>
      <ul className="container-list">
        <li className="item-list">
          <Link to="/"> HOME </Link>
        </li>
        <li className="item-list">
          <Link to="/About"> ABOUT ME </Link>
        </li>
        <li className="item-list">
          <Link to="/Experience"> EXPERIENCE </Link>
        </li>
        <li className="item-list">
          <Link to="/Education"> EDUCATION </Link>
        </li>
        <li className="item-list">
          <Link to="/Skills"> SKILLS </Link>
        </li>
        <li className="item-list">
          <Link to="/Hobbies"> HOBBIES </Link>
        </li>
        <li className="item-list">
          <Link to="/Achievements"> ACHIEVEMENTS </Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
