import React from 'react';
import "./Footer.css";
import LOGO from "../images/Screenshot_20241007_161728_Outlook__1_-removebg-preview.png";
import { Link } from 'react-router-dom';
import RedirectButton from './Redirection';
const Footer = () => {
  return (
  
        <section className="footer-section">
          <div className="container">
            <div className="footer">
              <div className="footer-logo">
                <img src={LOGO} alt="enviroconsult-logo" />
              </div>
              <div className="footer-content">
                <div className="footer-item">
                  <h3>Support</h3>
                  <ul>
                    <li><Link href="/contact">Questions & Answers</Link></li>
                    <li><Link href="/apropos">Client Support</Link></li>
                    <li><Link href="/apropos">Environmental Guidance</Link></li>
                  </ul>
                </div>
                <div className="footer-item">
                  <h3>Services</h3>
                  <ul>
                    <li><Link to="/apropos">Confidentiality Policy</Link></li>
                    <li><Link to="/profile">Site Navigation</Link></li>
                    <li><Link to="/contact">Membership</Link></li>
                  </ul>
                </div>
                <div className="footer-item">
                  <h3>Get in touch</h3>
                  <ul>
                    <li>pveisse@gmail.com</li>
                    <li>07 69 51 45 78</li>
                  </ul>
                </div>
              </div>
              <div className="footer-join-now">
                
                <RedirectButton path="/contact" label="Join Now" className="button"/>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Footer;
