import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 'diagnostic',
    title: 'Diagnostic et nettoyage matériel',
    icon: '🧰',
    desc: 'Diagnostic complet et nettoyage de votre matériel informatique.',
  },
  {
    id: 'windows',
    title: 'Nettoyage/réinstallation Windows',
    icon: '💻',
    desc: 'Remise à neuf logicielle, réinstallation propre de Windows.',
  },
  {
    id: 'perf',
    title: 'Optimisation des performances',
    icon: '⚡',
    desc: 'Votre PC retrouve rapidité et efficacité.',
  },
  {
    id: 'upgrade',
    title: 'Mise à jour de composants',
    icon: '🔧',
    desc: 'Ajout/Mise à jour de mémoire, disque, etc.',
  },
  {
    id: 'devis',
    title: 'Devis à 10€ déduit de la facture totale',
    icon: '📄',
    desc: 'Pas de surprise, devis clair avant intervention.',
  },
];

const Services = () => (
  <section id="services" className="py-5">
    <div className="container">
      <h2 className="text-primary text-center mb-4">Mes Services</h2>
      <div className="row justify-content-center">
        {services.map((service) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={service.id}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
