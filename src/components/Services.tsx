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
    id: 'sauvegarde',
    title: 'Sauvegarde de PC/disque dur',
    icon: '💾',
    desc: "Sauvegarde complète des données d'un PC ou disque dur.",
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
    id: 'montage',
    title: 'Montage de PC tour Windows',
    icon: '🪛',
    desc: 'Du choix des composants au montage du PC.',
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
      <h2 className="text-primary text-center mb-4">Mes Services <h5>(Windows uniquement)</h5></h2>
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
