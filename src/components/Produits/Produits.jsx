import React from "react";

function Produits() {
  return (
    <div className="max-w-screen-xl mx-auto px-10 mt-10">
      {/* En-tête de la section */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-700">
          NOUVEAUX PRODUITS TECHNOLOGIQUES AJOUTÉS
        </h2>
        <a href="#" className="text-blue-500 text-sm cursor-pointer hover:underline">
          Voir tout →
        </a>
      </div>

      {/* Grille des produits */}
      <div className="grid grid-cols-4 gap-6 mt-4">
        {[
          { name: "", img: "images/produit1.png" },
          { name: "", img: "images/Prothese.png" },
          { name: "", img: "images/scanner.png" },
          { name: "", img: "images/chirurgie.png" },
        ].map((product, index) => (
          <div
            key={index}
            className="w-[280px] h-[335px] border p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            {/* Image du produit */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-contain"
            />
            
            {/* Nom du produit */}
            <h3 className="text-sm font-semibold text-gray-700 mt-2 text-center">{product.name}</h3>
            
            {/* Bouton centré en rouge avec bordure bleue */}
            <div className="flex justify-center mt-auto">
              <button className="text-red-400 border-2 border-blue-400 px-4 py-1 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition">
                Voir le produit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produits;
