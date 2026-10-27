import { Bike, Footprints, LayoutGrid, Mountain, Snowflake, Tent, Waves } from 'lucide-react'

// Relación entre el nombre del ícono (definido en data/categories.js) y el componente
const icons = { Bike, Footprints, LayoutGrid, Mountain, Snowflake, Tent, Waves }

function CategoryCard({ name, icon, description, active, onSelect }) {
  const Icon = icons[icon] ?? LayoutGrid

  return (
    <button
      type="button"
      onClick={() => onSelect(name)}
      aria-pressed={active}
      className={`flex w-full items-center gap-3 rounded-2xl p-3 sm:p-4 xl:flex-col xl:items-start text-left ring-1 transition-all hover:-translate-y-0.5 hover:shadow-md ${
        active
          ? 'bg-pine-800 text-white ring-pine-800'
          : 'bg-white text-pine-900 ring-sand-200 hover:ring-pine-200'
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          active ? 'bg-ember-500 text-white' : 'bg-pine-50 text-pine-700'
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block font-display font-semibold leading-tight">{name}</span>
        <span className={`hidden text-sm leading-snug sm:block ${active ? 'text-pine-100' : 'text-pine-700/70'}`}>
          {description}
        </span>
      </span>
    </button>
  )
}

export default CategoryCard
