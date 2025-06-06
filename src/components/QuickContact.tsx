import React from 'react';
import { Mail, Phone } from 'lucide-react';

const QuickContact = () => (
  <div
    style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 1055,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}
  >
    <a
      href="tel:0786043753"
      className="btn btn-primary d-flex align-items-center gap-2 shadow"
      style={{ borderRadius: '50px', fontWeight: 600 }}
    >
      <Phone size={18} /> 07&nbsp;86&nbsp;04&nbsp;37&nbsp;53
    </a>
    <a
      href="mailto:matteo.rouzioux@gmail.com"
      className="btn btn-success d-flex align-items-center gap-2 shadow"
      style={{ borderRadius: '50px', fontWeight: 600 }}
    >
      <Mail size={18} /> Email
    </a>
  </div>
);

export default QuickContact;
