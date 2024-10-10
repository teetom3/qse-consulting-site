// Preloader.js
import React, { useEffect, useState } from 'react';
import './Preloader.css'; // Fichier CSS pour les styles
import LOGO from "../images/Screenshot_20241007_161728_Outlook__1_-removebg-preview.png";

const Preloader = () => {
  const [activeWord, setActiveWord] = useState(0);
  const words = ["Qualité", "Sécurité", "Environnement", "Management"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prevWord) => (prevWord + 1) % words.length);
    }, 1500); // Change le mot toutes les 1.5 secondes

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="preloader">
      <div className="logo_preloader">
        {/* Ici, tu peux ajouter l'image de ton logo */}
        <img src={LOGO} alt="Logo" />
      </div>
      <div className="words">
        {words.map((word, index) => (
          <span
            key={index}
            className={`word ${index === activeWord ? 'active' : ''}`}
          >
            {word}
          </span>
        ))}
      </div>

<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>

  
    </div>
  );
};

export default Preloader;
