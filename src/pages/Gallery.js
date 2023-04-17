import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { NavLink, Outlet } from "react-router-dom";
import Headline from "../components/Headline";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <Header />
      <Headline>Our Precious Moments With</Headline>
      <div className="gallery-container">
        <div className="gallery-nav">
          <NavLink
            to="/gallery/family"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <p className="text-large">Family</p>
          </NavLink>
          <NavLink
            to="/gallery/friends"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <p className="text-large">Friends</p>
          </NavLink>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
