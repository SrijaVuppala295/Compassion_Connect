import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import contactImg from "../assets/images/contact-banner.png"; 
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

     
        <Footer />
    </>
  );
};

export default Contact;
