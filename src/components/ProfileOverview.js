import React from 'react';
import "./ProfileOverview.css";
import ImgSolar from "../images/Image (8).png";
import ImgProfile from "../images/20240916_094501.jpg";
import ImgPro from "../images/monparcours.webp"
import ImgSafety from "../images/sécurité.webp";
import ImgQuality from "../images/quality.webp";
import ImgEnvironement from "../images/environnement.webp";
import ImgManagement from "../images/management.webp";
import ImgTransition from "../images/transition .webp";
import ImgMoi from "../images/pourquoimoi.webp";
import ImgExcellence from "../images/excellence.webp";
import ImgEcoute from "../images/ecoute.webp";
import ImgEngagement from "../images/engagement.webp";


const ProfileOverview = () => {
  return (
    <div className='container'>
    <div className="profile">
      <div className='Profile_Text'>
      <h2>« Qui suis-je ? »</h2>
      <p>Passionné par l’excellence opérationnelle, je mets mes 20 années d’expérience au service des entreprises pour les aider à améliorer leurs performances dans les domaines de la qualité, sécurité et environnement.</p>
<p>Cette expérience professionnelle, couplée à mon cursus universitaire, me permet de devenir aujourd’hui un expert en audit, conseil et formation. Je suis spécialisé dans l’accompagnement des entreprises vers l’optimisation de leurs processus et la conformité aux normes les plus strictes.</p>

      </div>
    <img src={ImgProfile} alt="Profile Picture" />
  </div>

<main className="main">
<section className="hero">
  <div className="container">
    <div className="hero-content">
     
      <div className="stats">
        <img className="img_pro" src={ImgPro}/>
        <div className="stat">
          <h3>Mon Parcours professionnel</h3>
          <p>Mon parcours a commencé dans le secteur de la fonderie industrielle puis de la fonderie d’art, où j'ai rapidement développé une expertise en management de la qualité et de la sécurité. J'ai évolué au sein de diverses industries comme le BTP, le matériel de lutte contre l’incendie, la métallurgie et les dispositifs médicaux, où j’ai supervisé des projets d’envergure.</p>
<p>Au fil des années, j'ai affiné mes compétences dans l’analyse des risques, l’audit et la mise en conformité selon des normes strictes comme l’ISO 9001, l’ISO 14001 et l’ISO 13485, avec une expertise particulière dans les secteurs à forte contrainte réglementaire (médical, nucléaire…).</p>

        </div>
    
       
      </div>
      
    </div>
    <div className="profile">
      <div className='Profile_Text'>
      <h2>Pourquoi moi ?</h2>
      <p>Chaque entreprise est unique, c'est pourquoi je privilégie une approche sur mesure, adaptée à vos spécificités. Mon engagement : vous offrir des solutions pratiques et concrètes, qui génèrent des résultats mesurables.</p>

<p><strong>Expérience terrain :</strong> Ayant travaillé concrètement sur le terrain, je comprends les défis quotidiens auxquels sont confrontées les entreprises. J’ai accompagné des sociétés de tailles diverses à travers des projets complexes, notamment dans l'implantation de centrales photovoltaïques, la réalisation de bilans carbone et la préparation aux certifications.</p>

<p><strong>Résultats concrets :</strong> Mon objectif est de vous accompagner dans l’obtention de résultats tangibles : amélioration de vos performances, réduction des coûts, renforcement de la conformité aux normes. Que ce soit pour un audit, un conseil stratégique ou une formation, je m’assure que chaque mission apporte une réelle valeur ajoutée à votre entreprise.</p>

      </div>
    <img src={ImgMoi} alt="Profile Picture" />
  </div>
    
  </div>
</section>

<h2>Mes valeurs</h2>
<section className="showcase">
  <div className="container">
    <ul className="showcase-list">
      <li className="showcase-item">
        <img src={ImgExcellence} alt="Sustainable Architecture" />
        <h3>Excellence </h3>
        <p> L’excellence est au cœur de ma démarche. Chaque intervention est une opportunité de vous apporter des solutions performantes et durables.</p>
       
      </li>
      <li className="showcase-item">
        <img src={ImgEcoute} alt="Green Fashion Trends" />
        <h3>Écoute</h3>
        <p>Je crois fermement à l’importance de l’écoute pour comprendre vos besoins spécifiques et y répondre de manière pertinente.</p>
        
      </li>
      <li className="showcase-item">
        <img src={ImgEngagement} alt="Dream Destinations" />
        <h3>Engagement durable</h3>
        <p> L'avenir des entreprises passe par une gestion responsable. J’accompagne mes clients dans leur transition vers des pratiques plus respectueuses de l’environnement.</p>
<p>Ensemble, nous pouvons relever les défis de votre entreprise et aller au-delà de vos objectifs de performance. Prenons contact pour discuter de vos besoins et élaborer une stratégie gagnante.</p>

      </li>
     
      
    </ul>
    
  </div>
</section>
</main>
</div>
  );
};

export default ProfileOverview;
