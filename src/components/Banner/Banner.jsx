export default function Banner() {
    return (
      <div className="relative max-w-screen-xl mx-auto mt-6 px-10 rounded-lg overflow-hidden ">
        {/* Image de fond */}
        <img
          src="/images/Rectangle 14.svg"
          alt="Salle d'opération"
          className="w-full h-auto object-cover"
        />
  
        {/* Texte superposé */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center mx-10">
          <h1 className="text-white text-2xl font-bold leading-snug px-6">
            <span className="block">Medi Vita Votre Magasin En</span>
            <span className="block font-extrabold">Ligne De Location Et Vente Des</span>
            <span className="block">Équipements Médicaux</span>
          </h1>
        </div>
      </div>
    );
  }
  