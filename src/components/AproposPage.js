
import React  from 'react';
import "./AproposPage.css";
import RedirectButton from './Redirection';
import Qualite from "../images/qualité.webp" ;
import Sécurité from "../images/sécurité.webp";
import Environnement from "../images/environment.webp";
import Excellence from "../images/excellence.webp";
import Ecoute from "../images/ecoute.webp";
import Engagement from "../images/engagement.webp";



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
          <h2>Mon expertise</h2>
          
          <div className="opportunities-grid">
            <div className="opportunity">
              <h3>Qualité</h3>
              <img className='image_monparcours' src={Qualite} />
              <p>En tant que spécialiste de la qualité, j&#39;accompagne les entreprises dans l&#39;optimisation de leurs systèmes de
              management de la qualité, tout en veillant à leur conformité aux normes et à la réglementation en vigueur.</p>
              <RedirectButton className="button" path="/profile" label="Découvrir" />
            </div>
            <div className="opportunity">
              <h3>Sécurité</h3>
              <img className='image_monparcours' src={Sécurité} />
              <p>Garantir la sécurité de vos équipes est essentiel. Je vous aide à identifier les risques, à mettre en place des mesures
              préventives et à garantir la conformité aux réglementations en matière de santé et sécurité au travail.</p>
              <RedirectButton className="button" path="/profile" label="Découvrir" />
            </div>
            <div className="opportunity">
              <h3>Environnement</h3>
              <img className='image_monparcours' src={Environnement} />
              <p>Sensible aux enjeux environnementaux, j’aide les entreprises à adopter des pratiques durables, que ce soit par la
              réduction de leur empreinte carbone ou la mise en place de certifications comme l&#39;ISO 14001. »</p>
              <RedirectButton className="button" path="/profile" label="Découvrir" />
            </div>
            <div className="opportunity">
              <h3>Excellence</h3>
              <img className='image_monparcours' src={Excellence} />
              <p>L’excellence est au cœur de ma démarche. Chaque intervention est une opportunité de vous apporter des solutions
performantes et durables. Avec des outils clairs et concis, au service de la décision, pour le pilotage et le suivi de vos
indicateurs d’activités et de performances.</p>
<RedirectButton className="button" path="/profile" label="Découvrir" />
            </div>
            <div className="opportunity">
              <h3 >Écoute</h3>
              <img className='image_monparcours' src={Ecoute} />
              <p>Je crois fermement à l’importance de l’écoute pour comprendre vos besoins spécifiques et y répondre de manière
pertinente. Parce que chaque projet est unique, je vous propose des solutions sur-mesure adaptées à vos défis
spécifiques. J’utilise une approche humaine &amp; flexible pour obtenir des résultats concrets.</p>
<RedirectButton className="button" path="/profile" label="Découvrir" />
            </div>
            <div className="opportunity">
              <h3>Engagement durable</h3>
              <img className='image_monparcours' src={Engagement} />
              <p>L&#39;avenir des entreprises passe par une gestion responsable. J’accompagne mes clients dans leur transition vers des
              pratiques plus respectueuses de l’environnement.</p>
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