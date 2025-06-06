import React from 'react';

const HeroSection = () => (
  <section id="hero" className="bg-primary text-white py-5">
    <div className="container">
      <div className="d-flex flex-column flex-md-row align-items-center">
        {/* Logo : centré sur mobile, aligné à gauche en desktop */}
        <div className="mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start" style={{ flex: '0 0 120px' }}>
          <img
            src="/Logo 1.png"
            alt="Logo Matteo Rouzioux"
            style={{ width: 120, height: 120, borderRadius: 16, background: "#fff" }}
          />
        </div>
        {/* Texte : centré sur mobile, aligné à gauche en desktop */}
        <div className="flex-grow-1 text-center text-md-start ps-md-5">
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
