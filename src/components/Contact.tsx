import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-primary text-center mb-4">Contact</h2>
      <div className="d-flex flex-column align-items-center gap-3">
        <a
          href="tel:0786043753"
          className="btn btn-outline-primary d-flex align-items-center gap-2 mb-2"
        >
          <Phone size={20} /> 07 86 04 37 53
        </a>
        <a
          href="mailto:matteo.rouzioux@gmail.com"
          className="btn btn-outline-primary d-flex align-items-center gap-2"
        >
          <Mail size={20} /> matteo.rouzioux@gmail.com
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
