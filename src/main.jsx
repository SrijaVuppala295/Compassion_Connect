import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import Contact from './pages/contact.jsx';
import Event from './pages/event.jsx';
import Feedback from './pages/feedback.jsx';
import VolunteerRegistration from './pages/volunteer.jsx';

import Navbar from './pages/Navbar.jsx';   
import HashRedirect from './pages/HashRedirect.jsx';     

import Payment from "./pages/Payment.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <HashRedirect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/volunteer" element={<VolunteerRegistration />} />
      </Routes>
    </Router>
  </StrictMode>
);
