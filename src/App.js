import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProfileOverview from './components/ProfileOverview';
import LandingPage from './components/LandingPage';
import AproposPage from './components/AproposPage';
import Loader from './components/Loader'; // Importer le composant Loader
import './App.css';

// Composant qui utilise useLocation
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={450}
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<LandingPage />} />
          <Route path="/profile" element={<ProfileOverview />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/apropos" element={<AproposPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Utilisation du composant qui contient les routes animées */}
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
