export default function SortingBar() {
  return (
    <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-xl px-4 py-2 text-sm text-blue-800 font-semibold">
      <span className="mr-2">Trier par :</span>

      <select className="px-3 py-1 border border-blue-200 rounded-full bg-white text-sm text-blue-900 focus:outline-none">
        <option>En vedette</option>
        <option>Meilleures ventes</option>
      </select>

      <select className="px-3 py-1 border border-blue-200 rounded-full bg-white text-sm text-blue-900 focus:outline-none">
        <option>Ordre alphabétique</option>
        <option>A - Z</option>
      </select>

      <select className="px-3 py-1 border border-blue-200 rounded-full bg-white text-sm text-blue-900 focus:outline-none">
        <option>Prix croissant</option>
        <option>Prix décroissant</option>
      </select>

      <select className="px-3 py-1 border border-blue-200 rounded-full bg-white text-sm text-blue-900 focus:outline-none">
        <option>Du plus récent au plus ancien</option>
        <option>Du plus ancien au plus récent</option>
      </select>
    </div>
  );
}
