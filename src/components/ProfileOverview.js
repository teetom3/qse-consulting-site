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


const ProfileOverview = () => {
  return (
    <div className='container'>
    <div className="profile">
      <div className='Profile_Text'>
      <h2>« Qui suis-je ? »</h2>
      <p>Passionné par l’excellence opérationnelle, je mets mes 20 années d’expérience au service des entreprises pour les
aider à améliorer leurs performances dans les domaines de la qualité, sécurité et environnement. »
Cette expérience professionnelle couplée à mon cursus universitaire me permet de devenir aujourd’hui un expert en
audit, conseil et formation, je suis spécialisé dans l’accompagnement des entreprises vers l’optimisation de leurs
processus et la conformité aux normes les plus strictes. </p>
      </div>
    <img src={ImgProfile} alt="Profile Picture" />
  </div>

<main className="main">
<section className="hero">
  <div className="container">
    <div className="hero-content">
     
      <div className="stats">
        <img className="image_monparcours" src={ImgPro}/>
        <div className="stat">
          <h3>Mon Parcours professionnel</h3>
          <p>Mon parcours a commencé dans le secteur la fonderie industrielle puis de la fonderie d’art, où j&#39;ai rapidement
développé une expertise en management de la qualité et de la sécurité. J&#39;ai évolué au sein de diverses industries, le
BTP, le matériel de lutte contre l’incendie, la métallurgie, les dispositifs médicaux, où j’ai supervisé des projets
d’envergure. </p>
<p>Au fil des années, j&#39;ai affiné mes compétences dans l’analyse des risques, l’audit et la mise en conformité selon des
normes strictes comme l’ISO 9001, l’ISO 14001 et l’ISO 13485, avec une expertise particulière dans les secteurs à
forte contrainte réglementaire (médical, nucléaire,…). </p>
        </div>
       
      </div>
      
    </div>
    
  </div>
</section>
<section className="showcase">
  <div className="container">
    <ul className="showcase-list">
      <li className="showcase-item">
        <img src={ImgQuality} alt="Sustainable Architecture" />
        <h3>Qualité</h3>
        <p>En tant que spécialiste de la qualité, j&#39;accompagne les entreprises dans l&#39;optimisation de leurs systèmes de
management de la qualité, tout en veillant à leur conformité aux normes et à la réglementation en vigueur. L’analyse
des risques, la traçabilité et la sécurité du patient sont les piliers de l’ISO 13485, notamment pour les dispositifs
médicaux.</p>
       
      </li>
      <li className="showcase-item">
        <img src={ImgSafety} alt="Green Fashion Trends" />
        <h3>Sécurité</h3>
        <p>Garantir la sécurité de vos équipes est essentiel. Je vous aide à identifier les risques, à mettre en place des mesures
        préventives et à garantir la conformité aux réglementations en matière de santé et sécurité au travail.</p>
        
      </li>
      <li className="showcase-item">
        <img src={ImgEnvironement} alt="Dream Destinations" />
        <h3>Environnement</h3>
        <p>Sensible aux enjeux environnementaux, j’aide les entreprises à adopter des pratiques durables, que ce soit par la
        réduction de leur empreinte carbone ou la mise en place de certifications comme l&#39;ISO 14001. </p>
       
      </li>
      <li className="showcase-item">
        <img src={ImgManagement} alt="Dream Destinations" />
        <h3>Management</h3>
        <p>Conduite de réunion ? Une revue de direction à préparer ? des entretiens annuels individuels ou des entretiens
professionnels obligatoires à réaliser ? Nous sommes à votre disposition pour :
- Préparer, réaliser, former, accompagner, coacher !
Un conflit ? une envie de retrouver du dynamisme au sein d’une équipe ? Nous vous accompagnons avec des
solutions sur mesure</p>
       
      </li>
      <li className="showcase-item">
        <img src={ImgTransition} alt="Dream Destinations" />
        <h3>Management de Transition</h3>
        <div><p>En période de crise, de restructuration ou de fusion, un manager de transition vous aide à maintenir la continuité tout en pilotant le changement.</p>
Lors d'un départ soudain ou d'une longue absence d'un cadre, 
nous sommes à votre disposition et capable de prendre la direction des opérations sans perturber le fonctionnement quotidien.<p>Vous avez un projet stratégique à mener (changement de système, expansion, certification) ? 

</p>
<p>
Vous avez un projet stratégique à mener (changement de système, expansion, certification) ?
  </p> En tant que manager de transition, 
nous vous apportons notre expertise pour garantir la réussite de ces initiatives en respectant vos objectifs et délais.</div>
       
      </li>
    </ul>
    
  </div>
</section>
</main>
</div>
  );
};

export default ProfileOverview;
