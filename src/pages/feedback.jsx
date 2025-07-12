import React, { useState, useEffect } from 'react';
//import '../styles/feedback.css';
import images from '../assets/images';

const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'general',
    rating: 0,
    message: '',
  });
  const [comments, setComments] = useState([
    {
      author: 'Alex Johnson',
      date: 'February 28, 2025',
      rating: 5,
      content: 'I just participated in the 5K fundraising run, and it was so well organized! The volunteers were amazing, and I\'m proud that my contribution will help provide clean water to communities in need.',
    },
    {
      author: 'Riya Agarwal',
      date: 'February 28, 2025',
      rating: 5,
      content: 'I just participated in the fundraising campaign, and it was so well organized! The volunteers were amazing, and I\'m proud that my contribution will help provide clean water and healthy food to communities in need.',
    },
    {
      author: 'Maya Smith',
      date: 'February 25, 2025',
      rating: 4,
      content: 'The donation process was seamless. I appreciate the transparency about how my funds will be used. Would love to see more updates on the education programs.',
    },
  ]);
  const [nameError, setNameError] = useState('');

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleStarClick = (value) => {
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s\-']+$/;
    return nameRegex.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(formData.name)) {
      setNameError('Please enter a valid name (letters only)');
      return;
    }
    setNameError('');

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const newComment = {
      author: formData.name,
      date: formattedDate,
      rating: parseInt(formData.rating),
      content: formData.message,
    };

    setComments([newComment, ...comments]);
    setFormData({
      name: '',
      email: '',
      topic: 'general',
      rating: 0,
      message: '',
    });
    alert('Thank you for your feedback!');
  };

  return (
    <div className="main-container">
      <a href="index.html" className="home-icon"><i className="fas fa-home"></i></a>

      {/* Feedback Form */}
      <div className="feedback-form-section">
        <h2>Share Your Feedback</h2>
        <img src={images.feedbackPana} alt="Feedback" className="form-image" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={() => {
                if (formData.name && !validateName(formData.name)) {
                  setNameError('Please enter a valid name (letters only)');
                } else {
                  setNameError('');
                }
              }}
              required
            />
            {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="topic">Topic:</label>
            <select id="topic" value={formData.topic} onChange={handleInputChange}>
              <option value="general">General Feedback</option>
              <option value="donation">Donation Process</option>
              <option value="event">Event Feedback</option>
              <option value="volunteer">Volunteer Experience</option>
              <option value="suggestion">Suggestion</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rate Your Experience:</label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((val) => (
                <span
                  key={val}
                  className="star"
                  onClick={() => handleStarClick(val)}
                  style={{ color: formData.rating >= val ? 'gold' : '#ccc' }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Recent Feedback</h3>
        <div id="comments-container">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="star"
                    style={{ color: star <= comment.rating ? 'gold' : '#ccc' }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="comment-content">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
