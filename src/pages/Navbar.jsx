import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";
import "../styles/home.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link
            to="/"
            className="logo"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={images.logo1}
              alt="Logo"
              style={{ width: 70, height: 70, marginRight: 10 }}
            />
            <div className="logo-text">
              <span
                style={{
                  color: "#1D2635",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                }}
              >
                Compassion
              </span>
              <span
                style={{
                  color: "#B68E56",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                }}
              >
                Connect
              </span>
            </div>
          </Link>

          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#causes">Our Causes</Link></li>
            <li><Link to="/#events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
