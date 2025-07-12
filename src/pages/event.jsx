import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import eventsData from "../js/eventData";

import "../styles/events.css";
import "../styles/home.css";

import run from "../assets/images/funrun.jpeg";
import food from "../assets/images/food.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

const EventDetails = () => {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(id));

  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => setFormSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModalOpen(false);
    setFormSubmitted(true);
    e.target.reset();
  };

  if (!event) {
    return <p style={{ marginTop: "100px", textAlign: "center" }}>Event not found.</p>;
  }

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="event-details-container" style={{ marginTop: "60px" }}>
          <div className="map-container">
            <iframe
              src={event.googlemap}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Location"
            ></iframe>
          </div>

          <div className="details-container">
            <h1 className="event-title">{event.name}</h1>
            <span className="event-date-large">{event.date}</span>
            <div className="event-info">
              <div className="info-row">
                <FontAwesomeIcon icon={faClock} />
                <span> {event.time}</span>
              </div>
              <div className="info-row">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span> {event.venue}</span>
              </div>
              <div className="info-row">
                <FontAwesomeIcon icon={faUsers} />
                <span> Expected Participants: {event.participants || "200+"}</span>
              </div>
            </div>

            <div className="event-description">
              <p>{event.description}</p>
              {event.details && <p>{event.details}</p>}
            </div>

            <div className="prizes-section">
              <h3>Awards & Recognition</h3>
              <div className="prize-item"><i className="fas fa-trophy"></i><span> Outstanding Contributor Award</span></div>
              <div className="prize-item"><i className="fas fa-medal"></i><span> Community Impact Recognition</span></div>
              <div className="prize-item"><i className="fas fa-award"></i><span> Volunteer of the Year Award</span></div>
            </div>

            <div className="registration-section">
              <h3>Participation Details</h3>
              <p>Ticket Price: <strong>${event.price || 150}</strong> per person</p>
              <p>Dress Code: <strong>{event.dressCode || "Black Tie"}</strong></p>
              <p>RSVP Deadline: <strong>{event.rsvp || "April 1, 2025"}</strong></p>
              <p>Table Reservations: Tables of 8 available for $1,100</p>
              <button className="btn-large" onClick={() => setModalOpen(true)}>Reserve Your Spot</button>
            </div>
          </div>
        </div>

        {modalOpen && (
          <div className="modal" onClick={(e) => e.target.classList.contains("modal") && setModalOpen(false)}>
            <div className="modal-content">
              <span className="modal-close" onClick={() => setModalOpen(false)}>&times;</span>
              <h3>Register for the Event</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="tickets">Number of Tickets</label>
                  <select id="tickets" name="tickets" required>
                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Additional Notes</label>
                  <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ padding: "10px" }}>Submit Registration</button>
              </form>
            </div>
          </div>
        )}

        {formSubmitted && (
          <div className="notification show">
            Registration Successful! Thank you for signing up.
          </div>
        )}

        <div className="related-events">
          <h2>Related Events</h2>
          <div className="event-grid">
            {eventsData
              .filter(e => e.id !== parseInt(id))
              .slice(0, 2)
              .map((related) => (
                <div className="event-card" key={related.id}>
                  <img src={related.image || run} alt={related.name} />
                  <div className="event-card-content">
                    <h4>{related.name}</h4>
                    <p>{related.date} | {related.venue}</p>
                    <Link to={`/event/${related.id}`} className="btn-secondary" style={{ padding: "10px" }}>Learn More</Link>
                  </div>
                </div>
            ))}
          </div>
        </div>

        <div className="event-updates">
          <h2>Upcoming Events</h2>
          <div className="event-list">
            {eventsData.map((event, index) => (
              <div className="event-item" key={index}>
                <img src={event.image} alt={event.name} className="event-image" />
                <h3>{event.name}</h3>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
