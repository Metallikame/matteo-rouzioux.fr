import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-translucent border-bottom sticky-top shadow-sm">
    <div className="container">
      <a
        className="navbar-brand d-flex align-items-center font-title text-primary fw-bold"
        href="#hero"
      >
        <img
          src="/favicon.ico"
          alt="Logo de Matteo Rouzioux"
          style={{ width: 40, height: 40, borderRadius: 8, marginRight: 8 }}
        />
        <span>Matteo Rouzioux</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav gap-2">
          <li className="nav-item">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              À propos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
