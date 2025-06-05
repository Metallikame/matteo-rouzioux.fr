import React from 'react';

const Footer = () => (
  <footer className="bg-primary text-white text-center py-3">
    <small>
      &copy; {new Date().getFullYear()} Matteo Rouzioux. Tous droits réservés.
    </small>
  </footer>
);

export default Footer;
