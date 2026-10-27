import Logo from './Logo'

function Footer() {
  return (
    <footer className="mt-24 bg-pine-950 text-pine-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between lg:px-8">
        <div className="max-w-sm">
          <Logo light />
          <p className="mt-4 text-sm text-pine-200">
            Plataforma para publicar y descubrir eventos deportivos y de aire libre en la Patagonia.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm">
          <div>
            <h4 className="font-display font-semibold text-white">Explorar</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#inicio" className="hover:text-ember-400">Inicio</a></li>
              <li><a href="#eventos" className="hover:text-ember-400">Eventos</a></li>
              <li><a href="#categorias" className="hover:text-ember-400">Categorías</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white">Organizadores</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-ember-400">Publicar evento</a></li>
              <li><a href="#" className="hover:text-ember-400">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-pine-200/70 sm:px-6 lg:px-8">
          © 2026 Club Plaza · Eventos Deportivos · Programación Web Avanzada
        </p>
      </div>
    </footer>
  )
}

export default Footer
