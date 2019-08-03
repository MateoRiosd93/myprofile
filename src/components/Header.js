import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../assets/me.png";

import "../style/Header.scss";

class Header extends Component {
  state = {
    menu: "container-list-hidden"
  };

  handleMenu = event => {
    const menu =
      this.state.menu === "container-list-hidden"
        ? "container-list-show"
        : "container-list-hidden";
    this.setState({
      menu
    });
  };

  render() {
    const { menu } = this.state;
    return (
      <div className="container-header">
        <div className="container-image">
          <img
            className="image-profile"
            src={image}
            alt="Mateo Rios Diaz"
          />
        </div>
        <label className="hamburger">
          <input
            onChange={this.handleMenu}
            type="checkbox"
            className="hamburger_checkbox"
          />
          <div className="hamburger_line" />
          <div className="hamburger_line" />
          <div className="hamburger_line" />
        </label>
        <ul className={menu}>
          <li className="item-list">
            <Link className="item" to="/">
              HOME
            </Link>
          </li>
          <li className="item-list">
            <Link className="item" to="/About">
              ABOUT ME
            </Link>
          </li>
          <li className="item-list">
            <Link className="item" to="/Experience">
              EXPERIENCE
            </Link>
          </li>
          <li className="item-list">
            <Link className="item" to="/Education">
              EDUCATION
            </Link>
          </li>
          <li className="item-list">
            <Link className="item" to="/Skills">
              SKILLS
            </Link>
          </li>
          <li className="item-list">
            <Link className="item" to="/Hobbies">
              HOBBIES
            </Link>
          </li>
          <li className="item-list">
            <Link className="item" to="/Achievements">
              ACHIEVEMENTS
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
