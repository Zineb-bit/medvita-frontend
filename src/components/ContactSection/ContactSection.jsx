import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="px-8 md:px-20 py-12 relative">
      {/* Titre principal */}
      <h2 className="text-center text-3xl font-bold text-[#4A76B5]">
        CONTACTEZ-NOUS
      </h2>

      {/* Ligne dégradée sous le titre */}
      <div className="w-full flex justify-center absolute top-[88px] left-0">
        <div className="w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[#4A76B5]/60 to-transparent" />
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between gap-10">
        {/* Infos de contact */}
        <div className="md:w-1/2 space-y-8 text-[#2D4F91]">
          <p className="text-black text-sm font-semibold">
            Nous aimons nos clients, alors n'hésitez pas à nous rendre visite pendant nos heures d'ouverture.
          </p>

          {/* Localisation */}
          <div>
            <h3 className="text-lg font-semibold uppercase text-[#2D4F91]">
              NOTRE LOCALISATION
            </h3>
            <div className="h-[1px] w-72 bg-[#4A76B5] my-1 opacity-80"></div>
            <div className="flex items-start gap-2 mt-2">
              <MapPin className="mt-1" size={20} />
              <p className="text-sm text-black">
                163 , Avenue Mohammed V, Fès – 30000, <br /> Fès, Maroc.
              </p>
            </div>
          </div>

          {/* Téléphone */}
          <div>
            <h3 className="text-lg font-semibold text-[#2D4F91]">Téléphone</h3>
            <div className="h-[0.5px] w-72 bg-[#4A76B5] my-1 opacity-80"></div>
            <div className="flex items-center gap-2 mt-1">
              <Phone size={20} />
              <span className="text-sm text-black">+212 637 654 321</span>
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold text-[#2D4F91]">EMAIL</h3>
            <div className="h-[1px] w-72 bg-[#4A76B5] my-1 opacity-80"></div>
            <div className="flex items-center gap-2 mt-1">
              <Mail size={20} />
              <span className="text-sm text-black">Medvita@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="md:w-1/2 bg-[#f2f6fe] rounded-lg p-6 shadow">
          <h3 className="text-[#2D4F91] text-lg font-semibold text-center mb-4">
            Envoyez-nous un message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nom*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D4F91]"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D4F91]"
              required
            />
            <input
              type="tel"
              placeholder="Téléphone*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D4F91]"
              required
            />
            <textarea
              placeholder="Écrivez votre message ici..."
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D4F91]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#2D4F91] text-white py-2 rounded hover:bg-[#1c3a6e] transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
