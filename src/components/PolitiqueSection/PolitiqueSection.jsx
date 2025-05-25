import React from "react";

const PolitiqueSection = () => {
  return (
    <div className="mt-6 mb-10 px-6 max-w-6xl mx-auto">
      <div className="rounded-xl p-6 bg-white shadow-sm relative overflow-hidden border border-blue-200">
        {/* Effet de contour flou bleu */}
        <div className="absolute inset-0 border border-blue-300 rounded-xl pointer-events-none blur-sm opacity-40"></div>

        <div className="relative z-10 space-y-6">
          <div>
            <h3 className="text-[#2563eb] font-bold text-lg uppercase">POLITIQUE DE LIVRAISON</h3>
            <p className="text-gray-700 mt-2 text-sm font-semibold">
              Les Commandes Passées Chez MedVita Sont Lancées Et Traitées Pour L'expédition Dès La Réception De La Demande Du Client.
              Veuillez Noter Que Nos Services D’expédition (Frais, Transport, Perte Ou Dommage De Toute Expédition, Etc.)
              Sont Conformes Aux Conditions D'expédition Du Vendeur.
            </p>
          </div>

          <div>
            <h3 className="text-[#2563eb] font-bold text-lg uppercase">POLITIQUE DE REMBOURSEMENT</h3>
            <p className="text-gray-700 mt-2 text-sm font-semibold">
              Veuillez Vous Référer À La Politique De Retour De MedVita.
            </p>
          </div>

          <div>
            <h3 className="text-[#2563eb] font-bold text-lg uppercase">
              POLITIQUE D’ANNULATION / DE RETOUR / D’ÉCHANGE
            </h3>
            <p className="text-gray-700 mt-2 text-sm font-semibold">
              Veuillez Vous Référer À La Politique De Retour De MedVita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueSection;
