import { Search, X } from 'lucide-react'

function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-sm">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-pine-700/50" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar evento por nombre…"
        aria-label="Buscar evento por nombre"
        className="w-full rounded-full border border-sand-200 bg-white py-3 pl-12 pr-11 text-pine-950 placeholder:text-pine-700/50 focus:border-pine-500 focus:outline-none focus:ring-4 focus:ring-pine-100 [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-pine-700/60 hover:bg-sand-100 hover:text-pine-900"
          aria-label="Limpiar búsqueda"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export default SearchBar
