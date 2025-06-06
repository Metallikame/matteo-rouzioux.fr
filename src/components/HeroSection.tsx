import React from 'react';

const HeroSection = () => (
  <section id="hero" className="bg-primary text-white py-5">
    <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
      <img
        src="/Logo 1.png"
        alt="Logo Matteo Rouzioux"
        style={{
          width: 120,
          height: 120,
          borderRadius: 16,
          background: '#fff',
        }}
      />
      <div>
        <h1 className="display-5 font-title mb-3">
          N’achetez pas un nouveau PC tout de suite
        </h1>
        <p className="lead font-body">
          Mieux vaut vérifier l’état de votre ancien PC avant de s’en
          débarrasser !
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
