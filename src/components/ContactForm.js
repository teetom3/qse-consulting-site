import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./ContactForm.css";
import image1 from "../images/Image (7).png";

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      fullName,
      email,
      companyName,
      phoneNumber,
      subject,
    };

    emailjs
      .send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessageStatus('Message sent successfully!');
        },
        (err) => {
          console.log('FAILED...', err);
          setMessageStatus('Failed to send the message. Please try again.');
        }
      );

    // Clear form after submission
    setFullName('');
    setEmail('');
    setCompanyName('');
    setPhoneNumber('');
    setSubject('');
  };

  return (
    <div className="contact-form">
      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h2>Rencontrons-nous en personne</h2>
            <p>
            Vous souhaitez en savoir plus ? Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé
            </p>
            <section className="contact">
              <h2>Get in touch</h2>
              <div className="contact-options">
                <button className="button">
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="text">pveisse@gmail.com</span>
                </button>
                <button className="button">
                  <span className="icon">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span className="text">07 69 51 45 78</span>
                </button>
              </div>
            </section>
            <section className="form">
              <h2>Ecrivez nous !</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Nom</label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="companyName">Entreprise</label>
                  <input
                    type="text"
                    id="companyName"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Numéro de téléphone</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <textarea
                    id="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    required
                  />
                </div>
                <button className="button" type="submit">Envoyé</button>
              </form>
              {messageStatus && <p className="message-status">{messageStatus}</p>}
            </section>
          </div>
          <div className="hero-image">
            <img src={image1} alt="Hero Image" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactForm;
