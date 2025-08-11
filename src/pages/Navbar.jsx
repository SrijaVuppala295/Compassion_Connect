import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";
import '../styles/home.css';
import { useAuth } from "../context/AuthContext";
import "../styles/home.css";      // keep if header/navbar layout lives here
import "../styles/navbar.css";    // new: navbar-specific styles

const Navbar = () => {
  
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={images.logo1} alt="Logo" className="logo-img" />
            <div className="logo-text">
              <span className="brand-primary">Compassion</span>
              <span className="brand-accent">Connect</span>
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
