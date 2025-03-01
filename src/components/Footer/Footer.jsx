import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-8 p-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-8 items-start">
        {/* Réseaux sociaux */}
        <div className="flex space-x-4 align-middle pt-16 justify-center">
          <FaFacebook className="cursor-pointer text-2xl hover:text-gray-300" />
          <FaInstagram className="cursor-pointer text-2xl hover:text-gray-300" />
          <FaTwitter className="cursor-pointer text-2xl hover:text-gray-300" />
          <FaLinkedin className="cursor-pointer text-2xl hover:text-gray-300" />
        </div>

        {/* Information & Catégories */}
        <div className="flex justify-center space-x-16">
          <div>
            <h4 className="font-bold mb-2">INFORMATION</h4>
            <ul className="space-y-1">
              <li>Accueil</li>
              <li>Équipement</li>
              <li>Produits</li>
              <li>À propos</li>
              <li>Contactez-nous</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">CATEGORIES</h4>
            <ul className="space-y-1">
              <li>Accessoires</li>
              <li>Marques</li>
              <li>Appareils</li>
              <li>Canaux ECG</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">CONTACT</h4>
          <p className="flex items-center space-x-2"><FaMapMarkerAlt /> <span>163, Avenue Mohammed V, Fès – 30000, Fès, Maroc</span></p>
          <p className="flex items-center space-x-2"><FaPhone /> <span>+212 637 654 321</span></p>
          <p className="flex items-center space-x-2"><FaEnvelope /> <span>Medvita@gmail.com</span></p>
        </div>
      </div>

      {/* Ligne de séparation */}
      <hr className="border-t border-white mt-6 opacity-50" />

      {/* Copyright */}
      <div className="text-center text-sm mt-4">
        © 2025 Medivita PVT. LTD. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
