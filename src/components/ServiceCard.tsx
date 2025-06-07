import React from 'react';

type ServiceCardProps = {
  title: string;
  icon: React.ReactNode | string;
  desc: string;
  onClick: () => void;
};

const ServiceCard = ({ title, icon, desc, onClick }: ServiceCardProps) => (
  <button
    type="button"
    className="card h-100 text-center shadow border-0 bg-white p-0"
    style={{ cursor: 'pointer' }}
    onClick={onClick}
    aria-label={`Plus d'infos sur le service : ${title}`}
  >
    <div className="card-body d-flex flex-column align-items-center">
      <div className="display-4 mb-3">{icon}</div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{desc}</p>
    </div>
  </button>
);

export default ServiceCard;
