import { FaUserCircle } from "react-icons/fa";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-3 items-center bg-white border-b">
      {/* Logo */}
      <div className="w-24 h-auto border-r-2 border-gray-300 pr-4">
        <img src="images/logo.png" alt="Logo" className="w-full h-full" />
      </div>

      {/* Section droite */}
      <div className="flex items-center gap-4">
        {/* Barre de recherche */}
        <div className="flex items-center border-2 border-gray-300 rounded-md px-3 py-2 w-64">
          <input
            className="ml-2 outline-none bg-transparent flex-1"
            type="text"
            name="search"
            id="search"
            placeholder="Rechercher un produit..."
          />
          <IoSearchOutline className="w-6 h-6 text-gray-400 cursor-pointer" />
        </div>

        {/* Bouton utilisateur */}
        <button className="flex items-center border-2 border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100">
          <FaUserCircle className="w-6 h-6 text-blue-600" />
          <IoChevronDown className="ml-1 text-blue-600 w-4 h-4" />
        </button>

        {/* Bouton Panier avec l’icône personnalisée */}
    <button className="flex items-center border-2 border-gray-300 rounded-md px-3 py-2 text-blue-600 font-medium hover:bg-gray-100">
      <img src="/images/panier.svg" alt="Panier" className="w-[30px] h-[24px]" /> {/* Taille du panier ajustée */}
      <span className="ml-1">Panier</span>
    </button>


      </div>
    </nav>
  );
}
