export default function Categories() {
    const categories = [
      { name: "Apnée du sommeil", img: "/images/Ellipse 2.png" },
      { name: "Dispositifs médicaux", img: "/images/dispo.png" },
      { name: "Soins à domicile", img: "/images/soins.png" },
      { name: "Équipement hospitalier", img: "/images/Equipement.png" },
      { name: "Soins orthopédiques", img: "/images/Ortho.png" },
      { name: "Appareils auditifs", img: "/images/Appareil.png" },
      { name: "Diagnostics", img: "/images/Diagnostic.png" },
      { name: "Mobilier hospitalier", img: "/images/Mobilier.png" },
      { name: "Endoscopie", img: "/images/Endo.svg" },
      { name: "Physiothérapie", img: "/images/Physo.svg" },
    ];
  
    return (
      <section className="max-w-screen-xl mx-auto px-10 mt-10">
        {/* Titre */}
        <h2 className="text-blue-600 font-bold text-sm uppercase">Plus de catégories</h2>
        <p className="text-gray-800 font-semibold text-lg mt-2">
          Voici les catégories d’équipements de santé
        </p>
  
        {/* Grille des catégories */}
        <div className="grid grid-cols-5 gap-6 mt-6">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-md border">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <span className="mt-2 text-sm font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  