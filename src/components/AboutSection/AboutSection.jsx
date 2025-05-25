import React from 'react';

const AboutSection = () => {
  return (
    <section className="text-center max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#2e62b9]">À PROPOS</h1>
      <div className="h-[1px] w-[90%] mx-auto my-2 bg-gradient-to-r from-transparent via-[#2e62b9] to-transparent"></div>
      <p className="text-[#000080] leading-7">
        Medvita est une boutique en ligne tout-en-un pour tous vos besoins en fournitures médicales, chirurgicales et de laboratoire.
        Nous vous garantissons un accès facile à toutes vos fournitures médicales et chirurgicales à portée de main.
        Nous proposons une large gamme de produits provenant des principaux fabricants de l'industrie, à des prix abordables,
        tout en offrant la facilité de la commande en ligne. Chez Medvita, nous offrons également la vente et la location de matériel médical.
        Chaque expédition subit un contrôle qualité rigoureux à chaque étape, de la réception de la commande à l'expédition.
        Le suivi facile de vos envois, assisté par notre service client, garantit que vos achats soient sûrs et fiables,
        de la passation de commande jusqu'à la livraison complète. De plus, nous offrons un service de livraison pour faciliter encore plus vos achats.
      </p>
    </section>
  );
};

export default AboutSection;
