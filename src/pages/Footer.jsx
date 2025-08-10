import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = ({ scrollToSection }) => {
  const go = (e, id) => {
    if (!scrollToSection) return; 
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-wrapper">
          {/* About */}
          <div className="footer-widget">
            <h3>About Us</h3>
            <p>
              CompassionConnect is a global nonprofit organization dedicated to
              empowering communities and changing lives through sustainable
              development, education, and humanitarian aid.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X)">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-widget">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => go(e, "home")}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => go(e, "about")}>About Us</a>
              </li>
              <li>
                <a href="#events" onClick={(e) => go(e, "events")}>Events</a>
              </li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/volunteer">Become a Volunteer</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-widget">
            <h3>Our Programs</h3>
            <ul className="footer-links">
              <li><a href="#clean-water">Clean Water Initiative</a></li>
              <li><a href="#education">Education for All</a></li>
              <li><a href="#healthcare">Healthcare Access</a></li>
              <li><a href="#emergency">Emergency Relief</a></li>
              <li><a href="#agriculture">Sustainable Agriculture</a></li>
              <li><a href="#empowerment">Women's Empowerment</a></li>
              <li><a href="#volunteer-abroad">Volunteer Abroad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-widget">
            <h3>Contact Us</h3>
            <div className="footer-contact">
              <i className="fas fa-map-marker-alt"></i>
              <span>Hyderabad</span>
            </div>
            <div className="footer-contact">
              <i className="fas fa-phone-alt"></i>
              <span>91+ 9324562567</span>
            </div>
            <div className="footer-contact">
              <i className="fas fa-envelope"></i>
              <span>info@compassionconnect.org</span>
            </div>
            <div className="footer-contact">
              <i className="fas fa-clock"></i>
              <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 CompassionConnect. All Rights Reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
