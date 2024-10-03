import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

import RedirectButton from './Redirection';
import imageheader from "../images/Image (7).png"
import LOGO from "../images/Screenshot_20240925_224013_Outlook-removebg-preview.png"


const Header = () => {
  return (
    <header className="App-header">
    <div className="container">
      <div className="header-content">
        <div className="logo">
          <img src={LOGO} alt="logo" />
          
        </div>
        <nav className="nav">
        <ul>
        <li>
          <Link to="/services">Home</Link>
        </li>
        <li>
          <Link to="/apropos">Mes services</Link>
        </li>
        <li>
          <Link to="/profile">A propos de moi</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
        </nav>
        <RedirectButton className="button" path="/profile" label="EXPLORER" />
      </div>
    </div>
    <div className="hero-section">
      
      <div className="container">
      
        <h1>AUDIT - CONSEIL - FORMATION</h1>
        <h1>Qualité Sécurité Environnement & Management</h1>
        <div className="buttons">
        <RedirectButton className="button" path="/apropos" label="Start Consulting" />
        <RedirectButton className="button" path="/contact" label="Engagez nous" />
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
