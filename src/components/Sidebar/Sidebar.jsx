import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const categories = [
  {
    title: "Accessoires",
    subCategories: ["Câble de moniteur ECG", "Papier ECG", "Endoscope", "Système Holter ECG"],
  },
  {
    title: "Marques",
    subCategories: ["Appareils", "Canaux ECG", "Beyond", "Contec"],
  },
  {
    title: "Appareils",
    subCategories: ["Appareil d'anesthésie", "Appareil ECG", "Lampe frontale", "Nébuliseur"],
  },
  {
    title: "Canaux ECG",
    subCategories: ["Portable", "Canal unique", "Six canaux", "Trois canaux"],
  },
];

export default function Sidebar() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="w-64 bg-blue-700 text-white rounded-lg p-3">
      <h2 className="text-lg font-bold p-2 bg-blue-900 rounded-t-lg">Catégories</h2>
      <div className="divide-y divide-blue-500">
        {categories.map((category, index) => (
          <div key={index}>
            <button
              onClick={() => toggleSection(category.title)}
              className="flex justify-between items-center w-full text-white font-semibold py-2 px-3 bg-blue-800 hover:bg-blue-600 transition-all"
            >
              {category.title}
              <span className="text-xl">{openSections[category.title] ? "−" : "+"}</span>
            </button>
            <ul className={`overflow-hidden transition-all ${openSections[category.title] ? "max-h-96 py-2" : "max-h-0"}`}>
              {category.subCategories.map((sub, i) => (
                <li key={i} className="pl-6 py-1 text-sm hover:bg-blue-600 cursor-pointer transition-all">
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
