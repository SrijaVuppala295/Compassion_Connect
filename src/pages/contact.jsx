import React, { useState, useEffect } from "react";
import contactImg from "../assets/images/brand communication-pana.png"; 
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // Optional: Scroll to top on mount (for SPA routing)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    if (name && email && subject && message) {
      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <>
      {/* Main Contact Section */}
      <div className="cc-contact-bg">
        <div className="cc-contact-main">
          <div className="cc-contact-img">
            <img
              src={contactImg}
              alt="Contact Illustration"
              onError={(e) => {
                e.target.src = "/api/placeholder/600/400";
                e.target.alt = "Contact Illustration Placeholder";
              }}
            />
          </div>
          <div className="cc-contact-form">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Type subject"
                required
              />

              <label>Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
                required
              />

              <button type="submit">Send Message</button>
              {showSuccess && (
                <div className="cc-success-msg">
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="cc-footer">
        <div className="cc-footer-main">
          <div className="cc-footer-col">
            <h3>About Us</h3>
            <div className="cc-footer-underline"></div>
            <p>
              CompassionConnect is a global<br></br>
               nonprofit organization dedicated to <br></br>empowering communities and <br></br>changing lives through sustainable<br></br> development, education, and<br></br> humanitarian aid.
            </p>
            <div className="cc-footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="cc-footer-col">
            <h3>Quick Links</h3>
            <div className="cc-footer-underline"></div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#events">Events</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/feedback">Feedback</a></li>
              <li><a href="/volunteer">Become a Volunteer</a></li>
            </ul>
          </div>
          <div className="cc-footer-col">
            <h3>Our Programs</h3>
            <div className="cc-footer-underline"></div>
            <ul>
              <li>Clean Water Initiative</li>
              <li>Education for All</li>
              <li>Healthcare Access</li>
              <li>Emergency Relief</li>
              <li>Sustainable Agriculture</li>
              <li>Women's Empowerment</li>
              <li>Volunteer Abroad</li>
            </ul>
          </div>
          <div className="cc-footer-col">
            <h3>Contact Us</h3>
            <div className="cc-footer-underline"></div>
            <ul>
              <li>Hyderabad</li>
              <li>91+ 9324562567</li>
              <li>info@compassionconnect.org</li>
              <li>Mon-Fri: 9:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
          <div className="cc-footer-divider"></div>
  <div className="cc-footer-copyright">
    © 2025 CompassionConnect. All Rights Reserved. | Privacy Policy | Terms of Service
  </div>
</footer>
        
    </>
  );
};

export default Contact;
