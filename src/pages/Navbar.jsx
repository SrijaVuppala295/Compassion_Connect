import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";
import '../styles/home.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src={images.logo1} alt="Logo" style={{ width: 70, height: 70, marginRight: 10 }} />
            <div className="logo-text">
              <span style={{ color: "#1D2635", fontSize: "1.8rem", fontWeight: 700 }}>Compassion</span>
              <span style={{ color: "#B68E56", fontSize: "1.8rem", fontWeight: 700 }}>Connect</span>
            </div>
          </Link>
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#causes">Our Causes</a></li>
            <li><a href="/#events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/logout">Logout</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
