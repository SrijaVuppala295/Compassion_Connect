import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import images from '../assets/images';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import eventsData from "../js/eventData";

const CompassionConnect = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [email, setEmail] = useState('');

  const totalPages = 2;

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle carousel navigation
  const handlePrevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleIndicatorClick = (index) => {
    setCurrentPage(index);
  };

  // Handle newsletter subscription
  const handleNewsletterSubmit = () => {
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="compassion-connect">
      {/* Header & Navbar */}
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <a href="/" className="logo">
              <img src={images.logo1} alt="CompassionConnect Logo" className="logo-img" />
              <div className="logo-text">
                <span style={{ color: '#1D2635' }}>Compassion</span>{' '}
                <span style={{ color: '#B68E56' }}>Connect</span>
              </div>
            </a>

            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a href="#causes" onClick={() => scrollToSection('causes')}>Causes</a></li>
              <li><a href="#events" onClick={() => scrollToSection('events')}>Events</a></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#blog" onClick={() => scrollToSection('blog')}>Blog</a></li>
              <li><Link to="/signUp">SignUp</Link></li>
              <li><a href="#logout">Logout</a></li>
              <li><a href="#leaderboard">Leaderboard</a></li>
            </ul>

            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container" style={{ marginTop: '50px' }}>
          <div className="hero-content">
            <div className="hero-buttons">
              <a href="#payment" className="btn btn-secondary">Donate Now</a>
              <a href="#causes" className="btn btn-outline" onClick={() => scrollToSection('causes')}>Explore Our Work</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-heading">
            <h2>Our Mission</h2>
            <p>For over a decade, we've been dedicated to transforming communities and empowering individuals through sustainable development, education, and humanitarian aid.</p>
          </div>

          <div className="about-wrapper">
            <div className="about-card">
              <div className="about-img">
                <img src={images.vision} alt="Our Vision" />
              </div>
              <div className="about-content">
                <h3>Our Vision</h3>
                <p>We envision a world where every person has access to basic necessities, quality education, and the opportunity to build a sustainable future, regardless of their circumstances.</p>
                <a href="https://en.wikipedia.org/wiki/Donation" className="btn btn-primary">Learn More</a>
              </div>
            </div>

            <div className="about-card">
              <div className="about-img">
                <img src={images.vision2} alt="Our Approach" />
              </div>
              <div className="about-content">
                <h3>Our Approach</h3>
                <p>We work hand-in-hand with local communities to develop long-term solutions that address root causes of poverty and inequality, creating lasting change that continues beyond our involvement.</p>
                <a href="https://en.wikipedia.org/wiki/Charitable_organization" className="btn btn-primary">Learn More</a>
              </div>
            </div>

            <div className="about-card">
              <div className="about-img">
                <img src={images.impact} alt="Our Impact" />
              </div>
              <div className="about-content">
                <h3>Our Impact</h3>
                <p>Through collaborative efforts with our donors, volunteers, and partners, we've improved lives across 50+ countries, implementing programs that empower communities to build their own sustainable futures.</p>
                <a href="https://en.wikipedia.org/wiki/Charity_(practice)#:~:text=Most%20forms%20of%20charity%20focus,orphans%2C%20and%20supporting%20social%20movements." className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="causes" id="causes">
        <div className="container">
          <div className="section-heading">
            <h2>Our Causes</h2>
            <p>Support our ongoing initiatives around the world. Every contribution makes a meaningful difference in our mission to create lasting change.</p>
          </div>

          <div className="causes-wrapper">
            <div className="cause-card">
              <div className="cause-img">
                <img src={images.cleanwater} alt="Clean Water Initiative" />
                <span className="cause-category">Water</span>
              </div>
              <div className="cause-content">
                <h3>Clean Water Initiative</h3>
                <p>Providing access to clean drinking water and sanitation facilities in underserved communities around the world.</p>
                <div className="progress-wrapper">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                  </div>
                  <div className="progress-stats">
                    <span>Raised: ₹375,000</span>
                    <span className="goal">Goal: ₹500,000</span>
                  </div>
                </div>
                <a href="#payment" className="btn btn-primary">Donate Now</a>
              </div>
            </div>

            <div className="cause-card">
              <div className="cause-img">
                <img src={images.edu} alt="Quality Education" />
                <span className="cause-category">Education</span>
              </div>
              <div className="cause-content">
                <h3>Quality Education</h3>
                <p>Building schools, training teachers, and providing learning materials for children in disadvantaged areas.</p>
                <div className="progress-wrapper">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '60%' }}></div>
                  </div>
                  <div className="progress-stats">
                    <span>Raised: ₹240,000</span>
                    <span className="goal">Goal: ₹400,000</span>
                  </div>
                </div>
                <a href="#payment" className="btn btn-primary">Donate Now</a>
              </div>
            </div>

            <div className="cause-card">
              <div className="cause-img">
                <img src={images.health} alt="Healthcare Access" />
                <span className="cause-category">Health</span>
              </div>
              <div className="cause-content">
                <h3>Healthcare Access</h3>
                <p>Supporting medical clinics, vaccination programs, and healthcare education in remote and vulnerable communities.</p>
                <div className="progress-wrapper">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '85%' }}></div>
                  </div>
                  <div className="progress-stats">
                    <span>Raised: ₹425,000</span>
                    <span className="goal">Goal: ₹500,000</span>
                  </div>
                </div>
                <a href="#payment" className="btn btn-primary">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="stories" id="stories">
        <div className="container">
          <div className="section-heading">
            <h2>Success Stories</h2>
            <p>Real stories of transformation and hope from individuals and communities around the world who have been impacted by your generosity.</p>
          </div>

          <div className="story-wrapper">
            <div className="story-card">
              <div className="story-header">
                <div className="story-avatar">
                  <img src={images.person1} alt="Maria" />
                </div>
                <div className="story-meta">
                  <h3>Maria's Journey</h3>
                  <span>Guatemala</span>
                </div>
              </div>
              <div className="story-quote">
                The new well in our village has transformed our lives. My daughters no longer have to walk 5 miles each day to collect water, and they can now attend school regularly. This gift of clean water is also a gift of education and opportunity.
              </div>
              <a href="https://en.wikipedia.org/wiki/Water_supply_and_sanitation_in_India" className="btn btn-outline">Read Full Story</a>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="story-avatar">
                  <img src={images.person2} alt="James" />
                </div>
                <div className="story-meta">
                  <h3>James' Future</h3>
                  <span>Kenya</span>
                </div>
              </div>
              <div className="story-quote">
                The scholarship program changed everything for me. I'm the first in my family to attend university, studying engineering to help solve problems in my community. One day, I hope to build sustainable water systems across Africa.
              </div>
              <a href="https://en.wikipedia.org/wiki/Room_to_Read" className="btn btn-outline">Read Full Story</a>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="story-avatar">
                  <img src={images.person3} alt="The Patel Family" />
                </div>
                <div className="story-meta">
                  <h3>A Village Transformed</h3>
                  <span>Bangladesh</span>
                </div>
              </div>
              <div className="story-quote">
                Our entire village was devastated by flooding. CompassionConnect not only provided immediate relief but helped us rebuild stronger homes and develop an early warning system. Now we feel safe and prepared for the future.
              </div>
              <a href="https://en.wikipedia.org/wiki/Disaster_Relief_Emergency_Fund" className="btn btn-outline">Read Full Story</a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
     <section className="events" id="events">
  <div className="container">
    <div className="section-heading">
      <h2>Upcoming Events</h2>
      <p>Join us at our upcoming events to learn more about our work...</p>
    </div>

    <div className="events-carousel">
      <div className="carousel-nav">
        <button className="nav-btn prev" onClick={handlePrevSlide}>&#10094;</button>
        <button className="nav-btn next" onClick={handleNextSlide}>&#10095;</button>
      </div>

      <div className="carousel-container" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
        {[...Array(totalPages)].map((_, pageIndex) => (
          <div key={pageIndex} className="carousel-page">
            {eventsData.slice(pageIndex * 3, pageIndex * 3 + 3).map((event, index) => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <img src={event.image} alt={event.name} />
                  <span className="event-date">{event.date}</span>
                </div>
                <div className="event-content">
                  <h3>{event.name}</h3>
                  <div className="event-meta">
                    <span><i className="fas fa-clock"></i> {event.time}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {event.venue}</span>
                  </div>
                  <p>{event.description}</p>
                  <Link to={`/event/${event.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentPage ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  </div>
     </section>
      {/* Blog Section */}
      <section className="blog" id="blog">
        <div className="container">
          <div className="section-heading">
            <h2>Latest News</h2>
            <p>Stay updated with our recent activities, impact stories, and insights from the field.</p>
          </div>

          <div className="blog-wrapper">
            <div className="blog-card">
              <div className="blog-img">
                <img src={images.sch} alt="New School Opening" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><i className="far fa-calendar"></i> Mar 2, 2025</span>
                  <span><i className="far fa-user"></i> Sarah Johnson</span>
                </div>
                <h3>New School Opens Doors to 500 Children in Rural Ethiopia</h3>
                <p>After two years of construction and community collaboration, our newest educational facility is now providing quality education to hundreds of children.</p>
                <a href="https://en.wikipedia.org/wiki/Building_Tomorrow" className="btn btn-primary">Read More</a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img">
                <img src={images.water} alt="Clean Water Systems" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><i className="far fa-calendar"></i> Feb 18, 2025</span>
                  <span><i className="far fa-user"></i> Michael Chen</span>
                </div>
                <h3>Innovative Water Filtration Systems Deployed in 15 Villages</h3>
                <p>Our engineering team has successfully implemented sustainable water filtration technology that will provide clean drinking water to over 10,000 people.</p>
                <a href="https://en.wikipedia.org/wiki/Ceramic_water_filter" className="btn btn-primary">Read More</a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-img">
                <img src={images.healthclinic} alt="Healthcare Initiative" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><i className="far fa-calendar"></i> Feb 5, 2025</span>
                  <span><i className="far fa-user"></i> Dr. Amina Patel</span>
                </div>
                <h3>Mobile Health Clinics Reach Remote Communities in Honduras</h3>
                <p>Our team of volunteer doctors and nurses provided critical healthcare services to over 1,200 individuals in areas with limited access to medical facilities.</p>
                <a href="https://en.wikipedia.org/wiki/MHealth" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="newsletter-content">
              <h2>Subscribe to Our Newsletter</h2>
              <p>Stay informed about our work, upcoming events, and ways you can make an impact. Join our community of compassionate changemakers.</p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleNewsletterSubmit} className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="impact-story">
        <div className="container">
          <div className="section-heading">
            <h2>Feedback From Our Supporters</h2>
            <p>Hear what donors, volunteers, and partners are saying about their experience with CompassionConnect.</p>
          </div>

          <div className="impact-wrapper">
            <div className="impact-image">
              <img src={images.supporters} alt="Volunteer Experience" />
            </div>
            <div className="impact-content">
              <h2>Making an Impact Together</h2>
              <p>We're privileged to work with dedicated supporters who share our vision for a more compassionate world. Their commitment powers our mission and inspires our work every day.</p>

              <div className="impact-quote">
                "Volunteering with CompassionConnect has been one of the most rewarding experiences of my life. Seeing firsthand how our efforts are changing lives gave me a new perspective on what truly matters."
              </div>

              <p>Our supporters are not just donors—they're partners in our mission. From corporate partnerships to individual monthly donors, from skilled volunteers to passionate advocates, each person plays a vital role in our collective impact.</p>

              <a href="https://en.wikipedia.org/wiki/Community_organizing" className="btn btn-primary">Join Our Community</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-widget">
              <h3>About Us</h3>
              <p>CompassionConnect is a global nonprofit organization dedicated to empowering communities and changing lives through sustainable development, education, and humanitarian aid.</p>
                <div className="social-links">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebook />
  </a>
  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter (X)"
  >
    <FaTwitter />
  </a>
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>
              </div>
            </div>

            <div className="footer-widget">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
                <li><a href="#events" onClick={() => scrollToSection('events')}>Events</a></li>
                 <li><Link to="/contact">Contact</Link></li>
               <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/volunteer">Become a Volunteer</Link></li>
              </ul>
            </div>

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
    </div>
  );
};

export default CompassionConnect;