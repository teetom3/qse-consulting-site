import React from 'react';
import "./Footer.css";
import LOGO from "../images/PHOTO-2024-10-01-11-33-56-removebg-preview.png";
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
                    <li><a href="/contact">Questions & Answers</a></li>
                    <li><a href="/apropos">Client Support</a></li>
                    <li><a href="/apropos">Environmental Guidance</a></li>
                  </ul>
                </div>
                <div className="footer-item">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="/apropos">Confidentiality Policy</a></li>
                    <li><a href="/profile">Site Navigation</a></li>
                    <li><a href="/contact">Membership</a></li>
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
                
                <button className="button">Join Now</button>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Footer;
