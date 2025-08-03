import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import Event from './pages/event.jsx';
import Feedback from './pages/feedback.jsx';
import VolunteerRegistration from './pages/volunteer.jsx';
import Navbar from './pages/Navbar.jsx';

const AppWrapper = ({ element }) => (
  <>
    <Navbar />
    {element}
  </>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<AppWrapper element={<Contact />} />} />
        <Route path="/event/:id" element={<AppWrapper element={<Event />} />} />
        <Route path="/feedback" element={<AppWrapper element={<Feedback />} />} />
        <Route path="/volunteer" element={<AppWrapper element={<VolunteerRegistration />} />} />
      </Routes>
    </Router>
  </StrictMode>
);
