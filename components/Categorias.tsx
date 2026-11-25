import Image from "next/image";
import Link from "next/link";

const categorias = ["Cañas", "Ropa", "Accesorios", "Señuelos y carnada"];

export default function Categorias() {
  return (
    <section id="categorias" className="px-2 py-16 md:px-6 md:py-20">
      <div className="flex items-start justify-between gap-6">
        <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase text-neutral-400">
          Categorías
        </h2>
        <span className="font-[family-name:var(--font-display)] text-sm font-bold text-neutral-400">
          03
        </span>
      </div>

      <div className="mt-8 grid items-end gap-8 md:grid-cols-[1.4fr_1fr]">
        <ul>
          {categorias.map((c) => (
            <li key={c} className="border-b border-neutral-300 first:border-t">
              <Link
                href="#"
                className="block py-3 font-[family-name:var(--font-display)] text-5xl font-extrabold uppercase leading-none transition-colors hover:text-[#c8102e] focus-visible:outline-2 focus-visible:outline-[#c8102e] md:py-4 md:text-7xl"
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-300">
          <Image
            src="/productos/senuelo.jpg"
            alt="Equipo de pesca"
            fill
            sizes="(min-width: 768px) 35vw, 100vw"
            className="object-cover object-top-left"
          />
        </div>
      </div>
    </section>
  );
}