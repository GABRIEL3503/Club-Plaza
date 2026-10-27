import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-pine-900 text-white">
      {/* Recurso visual: cordillera ilustrada */}
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle cx="1120" cy="170" r="70" className="fill-ember-500" opacity="0.9" />
        <path
          d="M0 420 L180 260 L300 350 L470 190 L640 360 L800 240 L960 380 L1120 220 L1300 340 L1440 270 L1440 600 L0 600 Z"
          className="fill-pine-700"
          opacity="0.45"
        />
        <path
          d="M0 500 L220 360 L380 460 L560 330 L760 470 L940 350 L1150 480 L1320 390 L1440 440 L1440 600 L0 600 Z"
          className="fill-pine-800"
        />
        <path
          d="M0 560 L260 470 L520 540 L780 480 L1040 550 L1300 490 L1440 520 L1440 600 L0 600 Z"
          className="fill-pine-950"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 pb-40 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-52 lg:pt-32">
        <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-pine-100 ring-1 ring-white/20">
          Deportes y aire libre en la Patagonia
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Encontrá tu próxima <span className="text-ember-400">aventura</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-pine-100">
          Carreras de montaña, rally de bici, travesías, escalada y más. Todos los eventos outdoor de
          la región en un solo lugar.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#eventos"
            className="group inline-flex items-center gap-2 rounded-full bg-ember-500 px-6 py-3 font-semibold text-white shadow-lg shadow-ember-500/25 transition-colors hover:bg-ember-600"
          >
            Explorar eventos
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#categorias"
            className="inline-flex items-center rounded-full px-6 py-3 font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
          >
            Ver categorías
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
