import React from "react";

const CaracteristiquesSection = () => {
  return (
    <div className="mt-4 px-6 max-w-6xl mx-auto">
      <div className="bg-[#eaf4ff] rounded-xl p-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Partie texte */}
        <div className="flex-1 space-y-4">
          <h2 className="text-[#2563eb] text-2xl font-extrabold mb-2">Caractéristiques</h2>
          <ul className="space-y-2 text-gray-800 text-base font-bold">
            <li className="flex items-start">
              <span className="text-[#f59e0b] mr-2 font-bold">●</span>
              Dimensions : 1900 mm x 900 mm x 600 mm
            </li>
            <li className="flex items-start">
              <span className="text-[#f59e0b] mr-2 font-bold">●</span>
              Structure en tubes rectangulaires en acier doux
            </li>
            <li className="flex items-start">
              <span className="text-[#f59e0b] mr-2 font-bold">●</span>
              Positions du dossier réglables par une manivelle vissée depuis le pied du lit
            </li>
            <li className="flex items-start">
              <span className="text-[#f59e0b] mr-2 font-bold">●</span>
              Montants de tête et de pied en acier inoxydable (S.S.) avec panneaux laminés.
            </li>
            <li className="flex items-start">
              <span className="text-[#f59e0b] mr-2 font-bold">●</span>
              Prédisposition pour une tige I.V. télescopique avec 4 emplacements.
            </li>
            <li className="flex items-start">
              <span className="text-[#f59e0b] mr-2 font-bold">●</span>
              Monté sur des embouts en PVC.
            </li>
          </ul>

          {/* Icônes rouges avec séparation */}
          <div className="mt-8 flex justify-start items-stretch text-[#d10000] text-sm font-bold">
            <div className="text-center px-4 space-y-1">
              <img src="/images/expedition.png" alt="Expédition rapide" className="h-7 mx-auto mb-1" />
              <p>EXPÉDITION<br />RAPIDE</p>
            </div>
            <div className="border-l border-[#d10000] h-full my-auto"></div>
            <div className="text-center px-4 space-y-1">
              <img src="/images/authentique.png" alt="Produits authentiques" className="h-7 mx-auto mb-1" />
              <p>PRODUITS 100%<br />AUTHENTIQUES</p>
            </div>
            <div className="border-l border-[#d10000] h-full my-auto"></div>
            <div className="text-center px-4 space-y-1">
              <img src="/images/options.png" alt="Options EMI" className="h-7 mx-auto mb-1" />
              <p>DES OPTIONS EMI<br />SONT DISPONIBLES</p>
            </div>
          </div>
        </div>

        {/* Image équipement */}
        <div className="flex-1 mt-6 lg:mt-0 lg:ml-6">
          <img
            src="/images/chaise-dentaire.png"
            alt="Chaise dentaire"
            className="w-full max-w-md mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CaracteristiquesSection;
