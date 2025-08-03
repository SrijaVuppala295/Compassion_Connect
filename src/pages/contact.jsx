import React, { useState } from 'react';
import '../styles/contact.css';
import images from '../assets/images';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (name && email && subject && message) {
      console.log({
        name,
        email,
        subject,
        message
      });

      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="containerr">
        <div className="image-section">
          <img
            src={images.brandCommunication}
            alt="Contact Us Illustration"
            onError={(e) => {
              e.target.src = '/api/placeholder/500/500';
              e.target.alt = 'Contact Illustration Placeholder';
            }}
          />
        </div>

        <div className="form-section">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Send Message</button>

            {showSuccess && (
              <div className="success-message">
                Your message has been sent successfully! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
