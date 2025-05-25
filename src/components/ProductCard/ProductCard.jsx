import React from "react";

const ProductCard = () => {
  return (
    <div className="mt-4 mb-4 px-4">
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row gap-4">
        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* Replace with actual image src */}
          <img src="/images/product_main.png" alt="Nom de l'image principale" className="rounded-lg max-h-96 object-contain" />
        </div>

        {/* Info section */}
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              HF3100 - Lit de soins intensifs électrique, modèle à colonne 5 fonctions - Avec balance intégrée
            </h2>
            <div className="bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-bold">
              100% BEST QUALITY
            </div>
          </div>

          <div className="text-sm text-gray-700">
            <p><span className="font-semibold">Marque :</span> HANUMANT SURGICALS</p>
            <p><span className="font-semibold">Type :</span> AVEC MATELAS ET SANS MATELAS</p>
            <p><span className="font-semibold">ID :</span> TTHF062</p>
            <p className="text-green-600 font-semibold mt-1">Disponibilité : En Stock</p>
            <p className="text-orange-500 text-sm">DISPONIBLE DÈS MAINTENANT</p>
          </div>

          <button className="bg-white border border-pink-500 text-pink-600 font-semibold px-4 py-2 rounded hover:bg-pink-100 w-max">
            ❓ FAITES UNE DEMANDE MAINTENANT
          </button>

          {/* Thumbnail images */}
          <div className="flex items-center gap-2 mt-2">
            <img src="/images/thumb1.png" alt="Nom image 1" className="w-20 h-20 object-contain border rounded" />
            <img src="/images/thumb2.png" alt="Nom image 2" className="w-20 h-20 object-contain border rounded" />
            <img src="/images/thumb3.png" alt="Nom image 3" className="w-20 h-20 object-contain border rounded" />
            <div className="w-20 h-20 bg-gray-800 text-white flex items-center justify-center rounded text-xs text-center">
              PLUS DE 5 IMAGES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
