import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";
import '../styles/home.css';
import FeedbackSection from "./feedback";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className={`header${darkMode ? ' dark-mode' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src={images.logo1} alt="Logo" style={{ width: 70, height: 70, marginRight: 10 }} />
            <div className="logo-text">
              <span style={{ color: darkMode ? "#ffffff" : "#1D2635", fontSize: "1.8rem", fontWeight: 700 }}>Compassion</span>
              <span style={{ color: darkMode ? "#FFD700" : "#B68E56", fontSize: "1.8rem", fontWeight: 700 }}>Connect</span>
            </div>
          </Link>
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/causes">Our Causes</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/feedback">Feedback</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/ourteam">Team</a></li>
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
