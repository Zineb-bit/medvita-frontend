import React from "react";

export default function PageHeader() {
  return (
    <header className="w-full bg-white shadow">
      <div className="max-w-screen-xl mx-auto px-10">
        <nav className="flex bg-blue-600 rounded-lg overflow-hidden">
          {/* Link to Home (placeholder for now) */}
          <a
            href="/#"
            className="bg-blue-900 text-white px-6 py-3 font-medium relative rounded-l-lg"
          >
            ACCUEIL
          </a>

          {/* Link to Equipement Hospitalier (placeholder) */}
          <a
            href="/#"
            className="text-white px-6 py-3 font-medium"
          >
            ÉQUIPEMENT HOSPITALIER
          </a>
        </nav>
      </div>
    </header>
  );
}
