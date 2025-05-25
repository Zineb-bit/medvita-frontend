import React from 'react';

export default function CoreValues() {
    return (
        <div className="bg-[#E6EEFA] rounded-xl max-w-[1200px] mx-auto mt-10 py-12 px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl text-[#4169e1] font-bold text-center mb-10">VALEURS FONDAMENTALES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* QUALITÉ */}
                <div className="flex items-start gap-5">
 <img src="/images/qualite.jpg" alt="Qualité" className="w-24 h-24 object-contain" />
                    <div>
                        <h3 className="text-lg font-semibold text-[#1F2937]">QUALITÉ</h3>
                        <p className="text-sm text-[#4B5563] font-semibold">
                            La Qualité De Medvita Est Primordiale Dans Tout Ce Que Nous Faisons. Nous Donnons Le Meilleur De Nous-Mêmes Pour Justifier Que Ce Que Nous Faisons
                        </p>
                    </div>
                </div>

                {/* ENGAGEMENT */}
                <div className="flex items-start gap-5">
                    <img src="/images/Engagement.jpg" alt="Engagement" className="w-24 h-24 object-contain" />
                    <div>
                        <h3 className="text-lg font-semibold text-[#1F2937]">ENGAGEMENT</h3>
                        <p className="text-sm text-[#4B5563] font-semibold">
                            Adhérer Aux Meilleurs Produits, Services Et Autres Initiatives Qui Bénéficient À La Fois Aux Environnements Internes Et Externes De L'organisation
                        </p>
                    </div>
                </div>

                {/* PERFORMANCE */}
                <div className="flex items-start gap-5">
                    <img src="/images/Performance.jpg" alt="Performance" className="w-24 h-24 object-contain" />
                    <div>
                        <h3 className="text-lg font-semibold text-[#1F2937]">PERFORMANCE</h3>
                        <p className="text-sm text-[#4B5563] font-semibold">
                            Créer Un Chemin Vers Le Succès En Élaborant Des Plans Qui Garantissent De Meilleurs Résultats Et Visent Le Développement
                        </p>
                    </div>
                </div>

                {/* SÉCURITÉ */}
                <div className="flex items-start gap-5">
                    <img src="/images/securite.jpg" alt="Sécurité" className="w-24 h-24 object-contain" />
                    <div>
                        <h3 className="text-lg font-semibold text-[#1F2937]">SÉCURITÉ</h3>
                        <p className="text-sm text-[#4B5563] font-semibold">
                            Assurer La Sécurité Avant Tout En Adoptant Des Mesures À Travers Des Politiques De Soins De Santé, Un Environnement Sûr Et La Fabrication De Produits Conformes Aux Normes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
