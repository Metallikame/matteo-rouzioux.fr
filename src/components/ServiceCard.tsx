import React from 'react';

type ServiceCardProps = {
  title: string;
  icon: React.ReactNode | string;
  desc: string;
};

const ServiceCard = ({ title, icon, desc }: ServiceCardProps) => (
  <div className="card h-100 text-center shadow">
    <div className="card-body d-flex flex-column align-items-center">
      <div className="display-4 mb-3">{icon}</div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{desc}</p>
    </div>
  </div>
);

export default ServiceCard;
