import React from "react";

const AboutLinks = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-6xl flex justify-between px-4 md:px-8">
        {/* Colonne de gauche */}
        <div className="flex flex-col justify-between gap-16">
          {/* Ligne 1 */}
          <div className="flex items-center gap-4">
            <span className="font-bold text-[#1F2A44] text-base md:text-lg">
              HOW ARE WE DIFFERENT
            </span>
            <img
              src="/images/sahm1.jpg"
              alt=""
              className="w-6 h-6 object-contain"
            />
          </div>

          {/* Ligne 2 */}
          <div className="flex items-center gap-4">
            <span className="font-bold text-[#1F2A44] text-base md:text-lg">
              COMPANY'S PHILOSOPHY
            </span>
            <img
              src="/images/sahm2.jpg"
              alt=""
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>

        {/* Colonne de droite */}
        <div className="flex flex-col justify-between gap-16">
          {/* Ligne 1 */}
          <div className="flex items-center gap-4">
            <img
              src="/images/sahm3jpg.jpg"
              alt=""
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold text-[#1F2A44] text-base md:text-lg">
              WHAT WE DO?
            </span>
          </div>

          {/* Ligne 2 */}
          <div className="flex items-center gap-4">
            <img
              src="/images/sahm4.jpg"
              alt=""
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold text-[#1F2A44] text-base md:text-lg">
              HOW WE GOT STARTED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLinks;
