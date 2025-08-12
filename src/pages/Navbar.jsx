import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";

import '../styles/home.css';
import FeedbackSection from "./feedback";
     // keep if header/navbar layout lives here
import "../styles/navbar.css";    // new: navbar-specific styles


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className={`header${darkMode ? ' dark-mode' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={images.logo1} alt="Logo" className="logo-img" />
            <div className="logo-text">

              <span style={{ color: darkMode ? "#ffffff" : "#1D2635", fontSize: "1.8rem", fontWeight: 700 }}>Compassion</span>
              <span style={{ color: darkMode ? "#FFD700" : "#B68E56", fontSize: "1.8rem", fontWeight: 700 }}>Connect</span>


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
          <button
            className="dark-mode-toggle"
            style={{
              marginLeft: '1rem',
              background: darkMode ? '#222' : '#eee',
              color: darkMode ? '#ffffff' : '#333333',
              border: 'none',
              borderRadius: '20px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background 0.3s, color 0.3s',
            }}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
