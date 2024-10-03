
import React  from 'react';
import "./AproposPage.css";
import RedirectButton from './Redirection';
import Qualite from "../images/qualité.webp" ;
import Sécurité from "../images/sécurité.webp";
import Environnement from "../images/environment.webp";
import Excellence from "../images/excellence.webp";
import Ecoute from "../images/ecoute.webp";
import Engagement from "../images/engagement.webp";
import Management from "../images/management.webp";
import Transition from "../images/transition .webp";



const AproposPage = () => {
return (
<div>
<section className="hero">
        <div className="container">
          <h2><i>« AQSELLENCE vous accompagne dans l&#39;optimisation de vos processus avec
          des solutions personnalisées d&#39;audit, de conseil et de formation. »</i></h2>
          
        </div>
      </section>
    
     
      <section className="opportunities">
        <div className="container">
          <h2>Domaines d'expertise</h2>
          
          <div className="opportunities-grid">
            <div className="opportunity">
              <h3>Qualité</h3>
              <img className='image_monparcours' src={Qualite} />
              <p>Une démarche qualité permet d’uniformiser les pratiques et d’améliorer la performance globale de votre entreprise. Je mets en place des systèmes de management de la qualité, j'optimise les processus et vous accompagne dans l’obtention de certifications comme l'ISO 9001 et l'ISO 13485.</p>
<p>J’analyse en profondeur votre système de management de la qualité pour garantir la conformité aux normes (ISO 9001, ISO 13485, ISO 19443, etc.). Mon objectif est d'améliorer vos processus internes et d’assurer une satisfaction client maximale.</p>
<p>Je vous accompagne dans la mise en place et l’optimisation de vos systèmes de management de la qualité afin d’assurer une production conforme et de répondre aux exigences clients et réglementaires en vigueur.</p>
<p>Je forme vos équipes aux systèmes de management de la qualité et aux meilleures pratiques pour garantir une amélioration continue (audit interne, revue de direction, SMQ, analyse de risques, etc.).</p>

              <RedirectButton className="button" path="/profile" label="Découvrir" />
            </div>
            <div className="opportunity">
              <h3>Sécurité</h3>
              <img className='image_monparcours' src={Sécurité} />
              <p>Je vous aide à vous conformer aux normes de sécurité, à réduire les risques professionnels et à garantir un environnement de travail sécurisé (exemple : gestion des risques, conformité aux réglementations, campagnes de sensibilisation).</p>
<p>J’évalue vos pratiques en matière de sécurité au travail afin de réduire les risques et de garantir la conformité avec les exigences réglementaires en vigueur liées à vos activités.</p>
<p>Je propose des améliorations de vos pratiques en matière de santé et de sécurité au travail, tout en vous aidant à créer un environnement de travail sûr et conforme aux réglementations.</p>
<p>Je protège vos collaborateurs en leur fournissant les outils nécessaires pour prévenir les risques professionnels et assurer leur sécurité au travail.</p>

              <RedirectButton className="button" path="/profile" label="Découvrir" />
            </div>
            <div className="opportunity">
              <h3>Environnement</h3>
              <img className='image_monparcours' src={Environnement} />
              <p>Je vous aide à réduire votre empreinte écologique et à mettre en place des pratiques durables (exemple : bilan carbone, conformité aux normes environnementales, éco-conception, ACV…).</p>
<p>J’analyse vos pratiques environnementales, y compris la gestion des déchets, la consommation d’énergie et le respect des normes environnementales (ISO 14001).</p>
<p>Mes conseils vous aideront à réduire votre impact environnemental tout en restant compétitif, grâce à des solutions innovantes et durables.</p>
<p>Je forme vos équipes pour intégrer des pratiques respectueuses de l’environnement dans votre chaîne de valeur.</p>

              <RedirectButton className="button" path="/profile" label="Découvrir" />
            </div>
           
            <div className="opportunity">
              <h3>Management</h3>
              <img className='image_monparcours' src={Management} />
             <p> Élaborer une politique RSE ? Animer une réunion ? Une revue de direction à préparer ? Des entretiens annuels individuels ou des entretiens professionnels obligatoires à réaliser ? Je suis à votre disposition pour optimiser la communication et la performance de vos équipes : préparer, réaliser, former, accompagner et coacher !</p>
<p>La conduite de réunion efficace et la gestion des entretiens individuels sont des moments clés pour renforcer la cohésion, aligner les objectifs et améliorer la performance. Je vous accompagne dans la préparation, la réalisation, et le suivi de ces moments stratégiques pour en maximiser l'impact.</p>
<p>Un conflit à résoudre ? Une envie de retrouver du dynamisme au sein d’une équipe ? Je vous accompagne avec des solutions sur mesure.</p>


              <RedirectButton className="button" path="/contact" label="Connect" />
            </div>
            <div className="opportunity">
              <h3>Management de transition</h3>
              <img className='image_monparcours' src={Transition} />
              <p>En période de crise, de restructuration ou de fusion, je vous aide à maintenir la continuité tout en pilotant le changement.</p>
<p>Lors d'un départ soudain ou d'une longue absence d'un cadre, je suis capable de prendre la direction des opérations sans perturber le fonctionnement quotidien.</p>
<p>Vous avez un projet stratégique à mener (changement de système, expansion, certification) ? En tant que manager de transition, je vous apporte mon expertise pour garantir la réussite de ces initiatives en respectant vos objectifs et délais.</p>
              <RedirectButton className="button" path="/contact" label="Connect" />
            </div>
          </div>
        </div>
      </section>
      <section className="locations">
        <div className="container">
          <h2>Nos locaux </h2>
          
          <div className="locations-grid">
            <div className="location">
              <h3>Montluçon </h3>
              <p>103 rue de Marignon , 03100 Montluçon</p>
            </div>
          
          </div>
        </div>
      </section>
      <section className="experience">
        <div className="container">
          <h2>Nos services</h2>
          <p>Explorer mes services</p>
          <RedirectButton className="button" path="/contact" label="Prenez-contact ! " />
        </div>
      </section>
</div>
)
}

export default AproposPage;