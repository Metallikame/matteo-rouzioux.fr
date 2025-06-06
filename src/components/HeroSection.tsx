import React from 'react';

const HeroSection = () => (
  <section id="hero" className="bg-primary text-white py-5">
    <div className="container">
      <div className="row align-items-center text-center text-md-start">
        <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            src="/Logo 1.png"
            alt="Logo Matteo Rouzioux"
            style={{ width: 120, height: 120, borderRadius: 16, background: "#fff" }}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1 className="display-5 font-title mb-3">
            N’achetez pas un nouveau PC tout de suite
          </h1>
          <p className="lead font-body mb-0">
            Mieux vaut vérifier l’état de votre ancien PC avant de s’en débarrasser !
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default HeroSection;
