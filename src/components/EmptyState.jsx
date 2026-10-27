import { SearchX } from 'lucide-react'

function EmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border-2 border-dashed border-sand-200 bg-white px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ember-100 text-ember-600">
        <SearchX className="h-7 w-7" />
      </span>
      <h3 className="mt-4 font-display text-xl font-bold">No encontramos eventos</h3>
      <p className="mt-1 max-w-sm text-pine-700/80">
        Probá con otro nombre o elegí una categoría distinta.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 rounded-full bg-pine-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pine-700"
      >
        Limpiar filtros
      </button>
    </div>
  )
}

export default EmptyState
