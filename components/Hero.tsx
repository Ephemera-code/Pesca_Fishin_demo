import Image from "next/image";
import Link from "next/link";

const links = ["Cañas", "Ropa", "Accesorios", "Señuelos"];

export default function Hero() {
  return (
    <section className="relative flex h-[85vh] min-h-[560px] flex-col overflow-hidden rounded-2xl bg-neutral-900 text-white">
      <Image
        src="/hero.jpg"
        alt="Pescador con caña sobre una roca junto al río"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />

      <header className="relative z-10 flex items-center justify-between p-5 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-bold"
        >
          <span className="grid size-8 place-items-center rounded-full border border-white/70 text-[10px]">
            Garin
          </span>
          Pesca Fishing
        </Link>

        <div className="flex items-center gap-6 text-xs">
          <nav className="hidden gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link}
                href="#categorias"
                className="text-white/80 transition-colors hover:text-white"
              >
                {link}
              </Link>
            ))}
          </nav>
          <button className="rounded-md bg-white px-3 py-1.5 font-medium text-black">
            Carrito (0)
          </button>
        </div>
      </header>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 md:px-8">
        <h1 className="max-w-lg font-[family-name:var(--font-display)] text-5xl font-extrabold uppercase leading-[0.95] md:text-7xl">
          Domá lo indomable
        </h1>
        <Link
          href="#productos"
          className="mt-6 w-fit rounded-md bg-[#c8102e] px-5 py-2.5 text-xs font-semibold transition-colors hover:bg-[#a30d25] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Ver equipos
        </Link>
      </div>

      <p className="absolute bottom-6 left-5 z-10 hidden max-w-[200px] text-xs text-white/70 md:block md:left-8">
        Cañas, reels y señuelos para río, laguna y mar.
      </p>

      <aside className="absolute bottom-5 right-5 z-10 hidden w-56 rounded-xl bg-white p-2 text-black md:block">
        <div className="relative h-24 overflow-hidden rounded-lg bg-neutral-200">
          <Image
            src="/productos/reel.jpg"
            alt="Reel Atlas 4000"
            fill
            sizes="224px"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-between px-1 pb-1 pt-2 text-xs">
          <span className="font-semibold">Reel Atlas 4000</span>
          <Link href="#productos" className="font-medium text-[#c8102e]">
            Ver
          </Link>
        </div>
      </aside>
    </section>
  );
}