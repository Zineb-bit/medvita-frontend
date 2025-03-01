export default function Header() {
    return (
      <header className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto px-10">
          <nav className="flex bg-blue-600 rounded-lg overflow-hidden">
            {/* Accueil (élément actif, aligné à gauche) */}
            <a
              href="#"
              className="bg-blue-900 text-white px-6 py-3 font-medium relative rounded-l-lg"
            >
              ACCUEIL
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
            </a>
  
            {/* Autres liens */}
            <a href="#" className="text-white px-6 py-3 font-medium">
              ÉQUIPEMENT HOSPITALIER
            </a>
          </nav>
        </div>
      </header>
    );
  }
  
  
  
  