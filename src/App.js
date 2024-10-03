import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProfileOverview from './components/ProfileOverview';
import LandingPage from './components/LandingPage';
import AproposPage from './components/AproposPage';
import Preloader from './components/Preloader'; // Import du preloader
import './App.css';

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
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false); // Nouvelle state pour gérer l'effet de fondu

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cache le preloader après 3 secondes
      setFadeIn(true);   // Applique l'effet de fondu
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className={`App ${fadeIn ? 'fade-in' : ''}`}> {/* Ajout de la classe fade-in */}
          <Router>
            <Header />
            <AnimatedRoutes />
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
