import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> HOME </Link>
        </li>
        <li>
          <Link to="/About"> ABOUT ME </Link>
        </li>
        <li>
          <Link to="/Experience"> EXPERIENCE </Link>
        </li>
        <li>
          <Link to="/Education"> EDUCATION </Link>
        </li>
        <li>
          <Link to="/Skills"> SKILLS </Link>
        </li>
        <li>
          <Link to="/Hobbies"> HOBBIES </Link>
        </li>
        <li>
          <Link to="/Achievements"> ACHIEVEMENTS </Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
