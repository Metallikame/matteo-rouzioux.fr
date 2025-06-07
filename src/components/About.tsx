import React from 'react';

const About = () => (
  <section id="about" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-primary text-center mb-4">À propos</h2>
      <div className="row align-items-center">
        <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
          <img
            src="/Logo.png"
            alt="Matteo Rouzioux"
            className="rounded-circle border border-primary"
            style={{ width: '120px', height: '120px' }}
          />
        </div>
        <div className="col-12 col-md-8">
          <h3>Matteo Rouzioux</h3>
          <p>
            Auto-entrepreneur passionné, j’aide les particuliers et pros à
            donner une seconde vie à leur ordinateur.
            <br />
            <strong>
              Conseils personnalisés, interventions rapides, tarifs clairs !
            </strong><br/>
            <i>Je travaille uniquement avec du matériel windows (pas de mac ou de linux)</i>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
