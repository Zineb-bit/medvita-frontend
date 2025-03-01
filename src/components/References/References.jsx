import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const References = () => {
  const references = [
    { img: "images/chu.svg", alt: "Hassan II" },
    { img: "images/al-kawtar.svg", alt: "Clinique Al Kawtar" },
    { img: "images/ispits.svg", alt: "Basmat" },
    { img: "images/akdital.png", alt: "Akdital" },
    { img: "images/annakhil.png", alt: "Annakhil" },
    { img: "images/atlas.jpg", alt: "Atlas" }, 
    { img: "images/rais.png", alt: "rais" },
    { img: "images/razi.png", alt: "razi" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 3; // Nombre d'éléments visibles

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % references.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + references.length) % references.length);
  };

  return (
    <div className="max-w-screen-xl px-10 mt-10 bg-blue-600 rounded-xl p-6 mx-10">
      {/* En-tête */}
      <div className="text-white text-lg font-semibold mb-4">Références</div>

      {/* Conteneur du carrousel */}
      <div className="relative flex items-center overflow-hidden">
        {/* Flèche gauche */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-yellow-400 p-3 rounded-full shadow-md"
        >
          <FaChevronLeft className="text-white text-lg" />
        </button>

        {/* Images des références */}
        <div className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)` }}>
          {references.map((ref, index) => (
            <div
              key={index}
              className="min-w-[190px] bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-2 mx-2"
            >
              <img src={ref.img} alt={ref.alt} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Flèche droite */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-yellow-400 p-3 rounded-full shadow-md"
        >
          <FaChevronRight className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
};

export default References;
