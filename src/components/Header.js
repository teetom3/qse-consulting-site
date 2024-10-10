import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css";

import RedirectButton from './Redirection';

import LOGO from "../images/Screenshot_20241007_161728_Outlook__1_-removebg-preview.png";

const Header = () => {
  const location = useLocation(); // Utiliser useLocation pour obtenir l'URL actuelle

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
                <Link 
                  to="/services" 
                  className={location.pathname === '/services' ? 'active' : ''}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/apropos" 
                  className={location.pathname === '/apropos' ? 'active' : ''}
                >
                  Mes services
                </Link>
              </li>
              <li>
                <Link 
                  to="/profile" 
                  className={location.pathname === '/profile' ? 'active' : ''}
                >
                  A propos de moi
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={location.pathname === '/contact' ? 'active' : ''}
                >
                  Contact
                </Link>
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
