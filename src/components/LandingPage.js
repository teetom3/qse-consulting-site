import React from 'react';
import "./LandingPage.css";
import ImgAudit from "../images/Image (7).png";
import ImgFormation from "../images/Image (5).png";
import ImgConseil from "../images/Image (6).png";
import ImgManagement from "../images/management.webp";
import RedirectButton from './Redirection';


//import Image5 from "../images/Image (4).png"

const LandingPage = () => {
  return (
    <div>
      <main>
        <section className="values-section">
          <div className="container">
           
             
                
                <h2><i>AQSELLENCE : L’excellence au service de votre performance. </i> </h2>
              </div>
              
            
          
        </section>
        <section className="enviroconsult-section">
          <div className="container">
            <div className="enviroconsult">
              <img src={ImgAudit} alt="enviroconsult" />
              <div className="enviroconsult-text">
                <h2>AUDIT : évaluer, diagnostiquer, améliorer</h2>
                <div><p>L’audit est un outil essentiel pour évaluer vos processus internes, identifier les non-conformités et mettre en lumière
                les opportunités d’amélioration.</p>


<p>En tant  qu'auditeur indépendant je vous aide à mieux comprendre vos forces et faiblesses, à anticiper les risques et à obtenir des
recommandations concrètes pour améliorer vos performances.</p></div>
                <RedirectButton className="button" path="/profile" label="Start Consultation Now" />
              </div>
            </div>
          </div>
        </section>
       
        <section className="enviroconsult-advocates-section">
          <div className="container">
            <div className="enviroconsult-advocates">
              
              <div className="enviroconsult-advocates-text">
                <h2>CONSEIL : Stratégie et expertise sur mesure</h2>
                <div><p>Le conseil est un levier pour transformer vos processus, améliorer votre organisation et vous assurer une croissance durable.</p>
<p>Mes conseils pratiques s’adaptent à chaque secteur pour améliorer durablement vos performances.</p>
<p>Je prends le temps d'analyser vos besoins spécifiques afin de vous proposer des solutions adaptées. Mon approche repose sur une écoute attentive et une expertise multisectorielle pour garantir une intervention ciblée et efficace.</p>
</div>

<RedirectButton className="button" path="/apropos" label="En Savoir Plus" />
              </div>
              <img src={ImgConseil} alt="enviroconsult-advocates" />
            </div>
          </div>
        </section>

        <section className="enviroconsult-section">
          <div className="container">
            <div className="enviroconsult">
              <img src={ImgFormation} alt="enviroconsult" />
              <div className="enviroconsult-text">
                <h2>FORMATION : Développer vos compétences</h2>
                <div><p>La formation est un investissement clé pour assurer la montée en compétences de vos équipes opérationnelles et cadres dirigeants, et leur permettre de répondre aux défis de demain :</p>
<ul>
    <li>En groupe : Je propose des formations sur site pour des groupes de 5 à 6 personnes. Chaque session est adaptée aux spécificités de votre secteur.</li>
    <li>Individuelle : J'offre également des formations individualisées pour un accompagnement sur mesure.</li>
</ul>
<p>Mes formations visent à renforcer l’autonomie de vos équipes, améliorer leur productivité et assurer une conformité aux standards les plus élevés. Chaque formation est suivie d’une évaluation et peut déboucher sur une certification reconnue, gage de compétence et de savoir-faire.</p>
<p>Vous souhaitez en savoir plus ? Contactez-moi pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.</p>
</div>
<RedirectButton className="button" path="/apropos" label="En Savoir Plus" />
              </div>
            </div>
          </div>
        </section>

        <section className="enviroconsult-advocates-section">
          <div className="container">
            <div className="enviroconsult-advocates">
              
              <div className="enviroconsult-advocates-text">
                <h2>MANAGEMENT</h2>
                <div><p>Conduite de réunion ? Une revue de direction à préparer ? des entretiens annuels individuels ou des entretiens
                professionnels obligatoires à réaliser ?</p> <p>Nous sommes à votre disposition pour :
                  </p>
<p>- Préparer, réaliser, former, accompagner, coacher !</p>
<p>conflit ? une envie de retrouver du dynamisme au sein d’une équipe ? Nous vous accompagnons avec des
solutions sur mesure</p></div>

<RedirectButton className="button" path="/apropos" label="En Savoir Plus" />
              </div>
              <img src={ImgManagement} alt="enviroconsult-advocates" />
            </div>
          </div>
        </section>
        
        <section className="impact-assessment-section">
          <div className="container">
            <div className="impact-assessment">
              <h2>Vous souhaitez en savoir plus ? Contactez-nous pour discuter de vos besoins spécifiques et
              obtenir un devis personnalisé</h2>
              
            </div>
            <div className="trusted-by-clients">
            <RedirectButton className="button" path="/contact" label="Contactez-nous" />
              
            </div>
          </div>
        </section>
        <section className="trusted-by-clients-section">
          <div className="container">
            <div className="trusted-by-clients">
              <h2>Trusted by Clients Worldwide</h2>
              
            </div>
          </div>
        </section>
        </main>
    </div>

  );
};

export default LandingPage;
