import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

const services = [
  {
    id: 'diagnostic',
    title: 'Diagnostic à 10€ déduit de la facture totale',
    icon: '📄',
    desc: 'Fais le point avant toute intervention : un devis clair, sans surprise.',
    details: (
      <>
        <br />
        <p>
          Bénéficie d’un diagnostic complet pour vérifier l’état général de ton
          ordinateur (matériel, logiciel, température, etc). Je t’explique
          chaque anomalie et te propose un devis transparent, déduit si tu fais
          effectuer la réparation.
        </p>
      </>
    ),
    tarifs: [
      'Diagnostic rapide (sur place) : 10 € (déduit si réparation)',
      'Diagnostic approfondi (tests poussés en atelier) : 25 € (déduit si réparation)',
    ],
  },
  {
    id: 'perf',
    title: 'Optimisation des performances',
    icon: '⚡',
    desc: 'Un PC plus rapide et durable, sans réinstaller Windows !',
    details: (
      <>
        <br />
        <p>
          Je remets ton PC d’aplomb : suppression des lenteurs, mise à jour des
          pilotes, nettoyage logiciel, réglages Windows, conseils sur mesure
          pour éviter les ralentissements à l’avenir.
        </p>
        <p>
          Idéal pour prolonger la durée de vie et redonner un vrai coup de jeune
          à ton ordinateur.
        </p>
      </>
    ),
    tarifs: [
      'Optimisation complète : 30 €',
      'Pack optimisation + conseils personnalisés : 40 €',
    ],
  },
  {
    id: 'upgrade',
    title: 'Mise à jour de composants',
    icon: '🔧',
    desc: 'Gagne en puissance sans changer de PC !',
    details: (
      <>
        <br />
        <p>
          J’ajoute ou je remplace ta RAM, ton disque dur/SSD, carte graphique,
          etc. Conseils pour le choix, montage propre et tests inclus : tu
          profites de la meilleure compatibilité et des performances maximales.
        </p>
      </>
    ),
    tarifs: [
      'Installation/remplacement d’un composant : 25 € (hors matériel)',
      'Pack installation + optimisation : 35 €',
    ],
  },
  {
    id: 'windows',
    title: 'Installation/réinstallation Windows',
    icon: '💻',
    desc: 'Windows tout propre, prêt à l’emploi, sans galère.',
    details: (
      <>
        <br />
        <p>
          Installation ou réinstallation de Windows 10/11 : je m’occupe de tout,
          des pilotes, à la configuration de base, en passant par la
          récupération ou la sauvegarde de tes données si besoin.
        </p>
        <p>
          Idéal pour repartir de zéro ou passer à Windows 11 en toute sérénité.
        </p>
      </>
    ),
    tarifs: [
      'Installation Windows (clé licence incluse) : 60 €',
      'Installation Windows (clé non incluse) : 30 €',
      'Mise à jour vers Windows 11 (sauvegarde/restauration de données incluse) : 45 €',
    ],
  },
  {
    id: 'sauvegarde',
    title: 'Sauvegarde de PC/disque dur',
    icon: '💾',
    desc: 'Protégez vos données avant tout !',
    details: (
      <>
        <br />
        <p>
          Sauvegarde de tous tes fichiers importants sur ton disque externe ou
          sur un support neuf, possibilité de stockage temporaire sécurisé si
          besoin d’intervention longue.
        </p>
      </>
    ),
    tarifs: [
      'Sauvegarde sur disque client : 25 €',
      'Sauvegarde avec disque fourni : sur devis (en fonction de la capacité)',
    ],
  },
  {
    id: 'montage',
    title: 'Montage de PC tour Windows',
    icon: '🪛',
    desc: 'De la sélection à l’assemblage : un PC sur-mesure, clés en main.',
    details: (
      <>
        <br />
        <p>
          Accompagnement personnalisé pour choisir les composants les plus
          adaptés à tes besoins et à ton budget (bureautique, gaming, création,
          etc).
        </p>
        <p>
          Je t’aide à concevoir une configuration cohérente, éviter les
          incompatibilités et optimiser les performances sans exploser le
          budget.
        </p>
        <p>
          Montage complet de ta tour : installation soignée, gestion des câbles,
          tests de stabilité, installation de Windows si besoin.
        </p>
        <p>
          Un vrai PC sur-mesure, prêt à l’emploi, avec des conseils pour
          l’entretien et l’évolution future.
        </p>
      </>
    ),
    tarifs: [
      'Conseil et sélection des composants : 30 € (déduit si montage effectué)',
      'Montage complet : 70 €',
      'Installation de Windows + drivers : 20 € (en option)',
    ],
  },
  {
    id: 'nettoyage',
    title: 'Nettoyage matériel',
    icon: '🧰',
    desc: 'Nettoyage en profondeur pour prolonger la vie de votre PC.',
    details: (
      <>
        <br />
        <p>
          Je démonte ton PC pour retirer la poussière, vérifier les
          ventilateurs, nettoyer les connectiques, renouveler la pâte thermique
          si besoin. Un vrai « dépoussiérage pro » pour améliorer ventilation et
          fiabilité.
        </p>
      </>
    ),
    tarifs: ['Nettoyage complet : 25 €'],
  },
];

const Services = () => {
  const [selected, setSelected] = useState<null | (typeof services)[0]>(null);

  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-primary text-center mb-4">
          Mes Services{' '}
          <small className="d-block text-muted fs-6">
            (PC Tour/portable Windows uniquement)
          </small>
        </h2>
        <div className="row justify-content-center">
          {services.map((service) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={service.id}>
              <ServiceCard {...service} onClick={() => setSelected(service)} />
            </div>
          ))}
        </div>
        <ServiceModal
          show={!!selected}
          onClose={() => setSelected(null)}
          service={selected}
        />
      </div>
    </section>
  );
};

export default Services;
