import React from 'react';

const ProductDetails = () => {
  return (
    <div className="w-full md:w-2/3">
      <h1 className="text-xl font-bold mb-2">
        HF3100 - Lit de soins intensifs électrique, modèle à colonne 5 fonctions - Avec balance intégrée
      </h1>
      <div className="mb-2">
        <span className="font-bold">MARQUE : </span>
        <span>HANUMANT SURGICALS</span>
      </div>
      <div className="mb-2">
        <span className="font-bold">TYPE : </span>
        <span>AVEC MATELAS ET SANS MATELAS</span>
      </div>
      <div className="mb-2">
        <span className="font-bold">ID : </span>
        <span>THF082</span>
      </div>
      <div className="text-green-600 font-bold mb-4">
        Disponibilité : En Stock
      </div>

      <div className="bg-yellow-100 text-center p-2 mb-4">
        ⭐ DISPONIBLE DÈS MAINTENANT
      </div>

      <button className="bg-pink-500 text-white rounded px-4 py-2 flex items-center mb-6">
        <span className="mr-2">🗣️</span>
        FAITES UNE DEMANDE MAINTENANT
      </button>
    </div>
  );
};

export default ProductDetails;