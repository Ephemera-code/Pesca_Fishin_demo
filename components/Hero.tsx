import Image from "next/image";
import Link from "next/link";

const navIzq = ["Cañas", "Reels", "Señuelos"];
const navDer = ["Ropa", "Contacto"];

const fotos = [
  { src: "/productos/mochila.jpg", alt: "Dos pescadores mirando el atardecer", pos: "left-[35.7%]" },
  { src: "/productos/cana.jpg", alt: "Bote en un río rodeado de árboles", pos: "left-[60.6%]" },
  { src: "/productos/reel.jpg", alt: "Cañas y señuelos sobre un muelle", pos: "left-[85.4%]" },
];

function Pato({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" fill="currentColor" aria-hidden className={className}>
      <ellipse cx="48" cy="38" rx="30" ry="9" />
      <path d="M30 34 L52 4 L64 34 Z" />
      <path d="M74 34 C84 30 90 26 96 28 L99 31 L90 36 C84 40 78 41 72 40 Z" />
      <path d="M18 38 L2 44 L20 44 Z" />
    </svg>
  );
}

function Pez({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 -4 100 54" fill="currentColor" aria-hidden className={className}>
      <path d="M4 25C22 6 52 4 76 20L98 6 92 25 98 44 76 30C52 46 22 44 4 25Z" />
      <path d="M40 10 L52 -2 L56 12Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-white text-neutral-900 md:h-[900px]">
      {/* Decoración de fondo (solo escritorio) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <svg
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-[400px] w-full fill-[#e7ecf4]"
        >
          <path d="M0 90 C60 70 130 70 200 85 L330 110 L430 80 L520 130 L610 40 L700 120 L790 85 L890 135 L1000 95 L1090 120 L1200 100 V400 H0Z" />
        </svg>
        <span className="absolute left-[90%] top-[278px] h-3 w-28 rounded-full bg-[#e7ecf4]" />
        <span className="absolute left-[84%] top-[360px] h-10 w-60 rounded-full bg-[#e7ecf4]" />

        <Pato className="absolute left-[13%] top-[320px] w-12 -rotate-12" />
        <Pato className="absolute left-[7%] top-[430px] w-9" />
        <Pato className="absolute left-[88%] top-[150px] w-12 -rotate-6" />
        <Pato className="absolute left-[69.5%] top-[340px] w-10 rotate-6" />
        <Pez className="absolute left-[16.5%] top-[395px] w-12 -rotate-[70deg]" />
        <Pez className="absolute left-[82%] top-[200px] w-12 rotate-[200deg]" />
      </div>

      {/* Navegación */}
      <header className="relative z-20 grid grid-cols-[1fr_auto_1fr] items-center px-6 pt-8 md:px-[5.6%] md:pt-[18px]">
        <nav className="hidden gap-10 text-[13px] md:flex">
          {navIzq.map((l) => (
            <Link key={l} href="#categorias" className="hover:opacity-60">
              {l}
            </Link>
          ))}
        </nav>


        <div className="col-start-3 flex items-center justify-end gap-10 text-[13px]">
          <nav className="hidden gap-10 md:flex">
            {navDer.map((l) => (
              <Link key={l} href="#categorias" className="hover:opacity-60">
                {l}
              </Link>
            ))}
          </nav>
          <button className="flex items-center gap-2 rounded-full border border-neutral-900 py-0.5 pl-3 pr-0.5 text-xs">
            Carrito
            <span className="grid size-5 place-items-center rounded-full bg-orange-500 text-[10px] font-semibold text-white">
              0
            </span>
          </button>
        </div>
      </header>

      {/* Texto de apoyo */}
      <div className="relative z-10 px-6 pt-10 md:absolute md:left-[5.6%] md:top-[148px] md:w-[240px] md:p-0">
        <p className="text-xs uppercase leading-5 tracking-wide">
          reel, caña y señuelo para cada especie,anzuelos, carnada y accesorios para cada técnica
        </p>
        <Link
          href="#productos"
          className="mt-4 inline-block text-xs text-neutral-500 hover:text-neutral-900"
        >
          Explorar
        </Link>
      </div>
      <p className="hidden text-xs text-neutral-500 md:absolute md:left-[73.4%] md:top-[148px] md:block">
        © Desde 1998
      </p>

      {/* Título */}
      <h1 className="relative z-10 my-8 text-center font-[family-name:var(--font-script)] text-7xl leading-none -rotate-6 md:absolute md:left-1/2 md:top-[190px] md:my-0 md:w-max md:-translate-x-1/2 md:-rotate-[9deg] md:text-[clamp(7rem,14vw,13rem)]">
        Pesca Fishing
      </h1>

      {/* Foto vertical central */}
      <div className="relative z-[1] mx-6 aspect-[4/5] overflow-hidden rounded-xl md:absolute md:left-1/2 md:top-0 md:m-0 md:aspect-auto md:h-[655px] md:w-[14.6%] md:-translate-x-1/2 md:rounded-none">
        <Image
          src="/productos/hero2.jpg"
          alt="Pescador con mosca al atardecer"
          fill
          priority
          sizes="(min-width: 768px) 15vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Historias */}
      <div className="absolute left-[73.4%] top-[443px] z-10 hidden items-center md:flex">
        <button
          aria-label="Ver historias de pescadores"
          className="relative grid size-20 shrink-0 place-items-center rounded-full bg-neutral-950 text-white"
        >
          <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0">
            <defs>
              <path id="anillo" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" />
            </defs>
            <text fontSize="8" letterSpacing="1.2" fill="currentColor">
              <textPath href="#anillo">HISTORIAS DE PESCADORES • 8 HISTORIAS •</textPath>
            </text>
          </svg>
          <svg viewBox="0 0 24 24" aria-hidden className="size-5 fill-current">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <div className="-ml-2 flex -space-x-3">
          {["/productos/mochila.jpg", "/productos/cana.jpg"].map((src) => (
            <div
              key={src}
              className="relative size-[76px] overflow-hidden rounded-full border-2 border-white"
            >
              <Image src={src} alt="Pescador sonriendo" fill sizes="76px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Misión */}
      <div className="relative z-10 px-6 py-10 md:absolute md:left-[5.6%] md:top-[659px] md:p-0">
        <p className="text-xs uppercase tracking-wide text-neutral-500">Nuestra misión</p>
        <h2 className="mt-4 max-w-[240px] text-2xl font-semibold leading-tight">
          Equipos para pescar mejor, cuidando cada río
        </h2>
        <Link
          href="#productos"
          className="mt-6 inline-block rounded-full bg-neutral-950 px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Cómo empezar
        </Link>
      </div>

      {/* Fotos inferiores */}
      <div className="hidden md:block">
        {fotos.map((f) => (
          <div
            key={f.src}
            className={`absolute top-[655px] z-10 h-[245px] w-[21.6%] overflow-hidden ${f.pos}`}
          >
            <Image src={f.src} alt={f.alt} fill sizes="22vw" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}