import React from 'react';
import "./Footer.css";
import LOGO from "../images/PHOTO-2024-09-30-09-33-00-removebg-preview.png"
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
                    <li>Questions & Answers</li>
                    <li>Client Support</li>
                    <li>Environmental Guidance</li>
                  </ul>
                </div>
                <div className="footer-item">
                  <h3>Services</h3>
                  <ul>
                    <li>Confidentiality Policy</li>
                    <li>Site Navigation</li>
                    <li>Membership</li>
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
                <input type="email" placeholder="Enter your email for updates" />
                <button className="button">Join Now</button>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Footer;
