import React, { useState } from "react";

const PaymentMethod = () => {
  const [showCardForm, setShowCardForm] = useState(false);

  const handleCardClick = () => setShowCardForm(true);
  const handleClose = () => setShowCardForm(false);

  // Example data for the order
  const numberOfItems = 3;
  const totalCost = 120; // Replace with actual total
  const shippingCost = 10;
  const totalToPay = totalCost + shippingCost;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-20 mt-4 px-4"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        
        {/* 🧾 Summary Section */}
        <div className="bg-gray-100 p-4 rounded mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Résumé de la commande</h2>
          <p>Nombre d’articles : <strong>{numberOfItems}</strong></p>
          <p>Coût des articles : <strong>{totalCost} MAD</strong></p>
          <p>Frais de livraison : <strong>{shippingCost} MAD</strong></p>
          <hr className="my-2" />
          <p className="text-lg font-bold">
            Total à payer : {totalToPay} MAD
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Méthode de paiement</h2>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => alert("Paiement à la livraison sélectionné")}
            className="flex flex-col items-center bg-gray-200 p-4 rounded-md hover:bg-gray-300 transition"
          >
            <span className="text-3xl">📦</span>
            <span className="text-sm mt-1">Paiement à la livraison</span>
          </button>
          <button
            onClick={handleCardClick}
            className="flex flex-col items-center bg-gray-200 p-4 rounded-md hover:bg-gray-300 transition"
          >
            <span className="text-3xl">💳</span>
            <span className="text-sm mt-1">Carte de débit</span>
          </button>
        </div>

        {/* ✅ Passer à la caisse button */}
        <button className="bg-blue-700 text-white w-full py-2 rounded hover:bg-blue-800 transition mb-4">
          Passer à la caisse
        </button>

        {showCardForm && (
          <div className="bg-white p-6 rounded-lg shadow-md relative text-left">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">
              Détails de la carte de débit
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Numéro de la carte
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Nom du titulaire de la carte
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Code de sécurité
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="save" className="mr-2" />
                <label htmlFor="save" className="text-sm">
                  Sauvegarder les détails de la carte
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
              >
                Confirmer
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
