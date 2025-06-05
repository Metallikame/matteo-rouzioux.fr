import React from 'react';

const Header = () => (
  <header className="bg-primary text-white shadow p-4 mb-4">
    <div className="container d-flex align-items-center gap-4">
      <img
        src="/Logo 1.png"
        alt="Logo Matteo Rouzioux"
        style={{ width: '64px', height: '64px', borderRadius: '8px' }}
      />
      <div>
        <h1 className="h3 mb-0 fw-bold font-title">
          N’achetez pas un nouveau PC tout de suite
        </h1>
        <p className="mb-0" style={{ opacity: 0.8 }}>
          Mieux vaut vérifier l’état de votre ancien PC avant de s’en
          débarrasser !
        </p>
      </div>
    </div>
  </header>
);

export default Header;
