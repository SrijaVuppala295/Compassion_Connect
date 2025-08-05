import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import './index.css';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import Event from './pages//event.jsx';
import Feedback from './pages/feedback.jsx';
import VolunteerRegistration from './pages/volunteer.jsx';
import SignUp from './pages/signUp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/volunteer" element={<VolunteerRegistration />} />
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  </StrictMode>
);
