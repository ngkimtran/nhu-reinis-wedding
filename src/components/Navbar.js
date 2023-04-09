import React from "react";
import header from "../images/header.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar-img" src={header} alt="" />
      <p className="navbar-title">Nhu &#38; Reinis</p>
      <div className="navbar-container">
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Events
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/rsvp"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              RSVP
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
