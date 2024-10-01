
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProfileOverview from './components/ProfileOverview';
import LandingPage from './components/LandingPage';
import AproposPage from './components/AproposPage';
import Loader from './components/Loader'; // Importer le composant Loader
import "./App.css";


function App() {

 

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<LandingPage />} />
          <Route path="/profile" element={<ProfileOverview />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path ="/apropos" element={<AproposPage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
