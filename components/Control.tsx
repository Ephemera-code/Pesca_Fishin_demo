import Image from "next/image";

const items = [
  { titulo: "Cañas de carbono", detalle: "Livianas y sensibles" },
  { titulo: "Reels de precisión", detalle: "Freno progresivo" },
  { titulo: "Mochilas y cajas", detalle: "Todo en su lugar" },
];

export default function Control() {
  return (
    <section className="px-2 py-16 md:px-6 md:py-20">
      <div className="flex items-start justify-between gap-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl uppercase leading-none md:text-5xl">
          <span className="font-light text-neutral-400">Diseñado </span>
          <span className="font-extrabold">para el control</span>
        </h2>
        <span className="font-[family-name:var(--font-display)] text-sm font-bold text-neutral-400">
          02
        </span>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-[1fr_1.6fr]">
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item.titulo}
              className="flex items-center gap-4 rounded-xl bg-white p-4"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-neutral-100 text-xs font-bold text-[#c8102e]">
                {item.titulo[0]}
              </span>
              <div className="text-xs">
                <p className="font-semibold">{item.titulo}</p>
                <p className="mt-0.5 text-neutral-500">{item.detalle}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-300 md:aspect-auto md:min-h-[360px]">
          <Image
            src="/productos/cana.jpg"
            alt="Pescador revisando su equipo"
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}