import React from "react";

const VisionSection = () => {
  return (
    <section className="relative w-full bg-white pt-24 pb-40 overflow-hidden">
      {/* Ligne bleue fine */}
      <div className="w-full flex justify-center absolute top-[120px] left-0">
        <div className="w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[#006CFF]/60 to-transparent" />
      </div>

      {/* MOT VISION */}
      <h1
        className="absolute left-1/2 transform -translate-x-1/2 text-[8rem] font-extrabold tracking-wide select-none z-0 leading-none"
        style={{
          top: "110px",
          background: `linear-gradient(to bottom, #1E3A8A 35%, #60A5FA 65%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        VISION
      </h1>

      {/* Premier paragraphe */}
      <div className="relative z-10 flex justify-end mt-24 px-6">
        <div className="max-w-3xl mr-4 w-full animate-fadeIn" style={{ animation: 'fadeIn 1.2s ease-out forwards' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-white opacity-50 blur-2xl rounded-2xl z-0 scale-105" />
            <div
              className="relative px-8 py-6 rounded-2xl border border-gray-200 text-[#2d3e50] text-[14.5px] leading-relaxed shadow-md w-full"
              style={{
                backgroundColor: "rgba(230, 238, 250, 0.8)",
                zIndex: 10,
              }}
            >
              Offrir des solutions et des produits dont l'efficacité est vérifiable – telle est notre vision chez Medvita. Elle est notre principe directeur à tous les niveaux, que ce soit dans la prise de décisions stratégiques au sein des équipes de direction ou dans le travail quotidien de chaque employé. Cette vision nous pousse à développer et à offrir des solutions et des produits de haute qualité, dont l’efficacité et l’efficience peuvent être prouvées dans leur application. De plus, chez Medvita, nous nous engageons à offrir également des services de vente et de location de matériel médical, avec un suivi rigoureux et une livraison rapide pour garantir une expérience optimale à nos clients.
            </div>
          </div>
        </div>
      </div>

      {/* MOT MISSION */}
      <h1
        className="absolute left-1/2 transform -translate-x-1/2 text-[8rem] font-extrabold tracking-wide select-none z-0 leading-none"
        style={{
          top: "580px",
          background: `linear-gradient(to bottom, #1E3A8A 35%, #60A5FA 65%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        MISSION
      </h1>

      {/* Deuxième paragraphe */}
      <div className="relative z-10 flex justify-start mt-16 px-6">
        <div className="max-w-3xl ml-4 w-full animate-fadeIn" style={{ animation: 'fadeIn 1.5s ease-out forwards' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-white opacity-50 blur-2xl rounded-2xl z-0 scale-105" />
            <div
              className="relative px-8 py-6 rounded-2xl border border-gray-200 text-[#2d3e50] text-[14.5px] leading-relaxed shadow-md w-full"
              style={{
                backgroundColor: "rgba(230, 238, 250, 0.8)",
                zIndex: 10,
              }}
            >
              Notre mission chez Medvita est d'améliorer en permanence la qualité de vie et la qualité du travail pour tous nos clients et patients grâce à notre travail et à nos solutions. La sécurité et le succès des thérapies sont toujours au cœur de nos préoccupations. Pour nous, tout comme pour toute autre entreprise, le succès économique est la base fondamentale pour accomplir notre mission. Cela ne peut être atteint qu’avec les personnes pour lesquelles et avec lesquelles nous travaillons. C’est pourquoi elles sont au centre de notre réflexion et de nos actions.
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default VisionSection;
