import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react'; // Icone panier

const allProducts = [
  {
    name: 'Lit de réanimation électrique',
    price: '2 580,64',
    stock: true,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Équipement médical d’anesthésie',
    price: '2 018',
    stock: true,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Lit système Angio électrique',
    price: '3 416',
    stock: true,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Thermomètre médical numérique',
    price: '243',
    stock: true,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Lit C-Arm pour réanimation',
    price: '1 225',
    stock: true,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Système de traitement Cyberknife',
    price: '452',
    stock: true,
    image: 'https://via.placeholder.com/150',
  },
];

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = 3;

  const currentProducts = allProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="p-8">
      <h2 className="text-gray-700 font-semibold text-lg mb-6">
        Accessoires &gt; Câble De Moniteur ECG
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="font-medium text-sm mb-1">{product.name},<br />Avec balance intégrée :</h3>
            <p className="text-green-600 text-sm font-semibold mb-2">Disponibilité : Dans le Stock</p>
            <p className="text-blue-800 font-bold text-lg mb-2">{product.price} MAD</p>
            <button className="flex items-center gap-2 border border-blue-500 text-blue-600 text-sm px-4 py-1 rounded hover:bg-blue-50">
              <ShoppingCart size={16} />
              Ajouter à la carte
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 items-center space-x-2 text-sm">
        {/* Left arrow */}
        <button
          className="w-8 h-8 rounded-full border hover:bg-gray-100 text-gray-600"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        >
          &lt;
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-full border ${
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-100'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Right arrow */}
        <button
          className="w-8 h-8 rounded-full border hover:bg-gray-100 text-gray-600"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
