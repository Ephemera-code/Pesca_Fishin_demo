import Image from "next/image";

const productos = [
  {
    nombre: "Reel Atlas 4000",
    detalle: "Freno suave, 10 rulemanes",
    precio: "$189.900",
    imagen: "/productos/reel.jpg",
  },
  {
    nombre: "Caña Ridge 2,10 m",
    detalle: "Carbono, acción rápida",
    precio: "$142.500",
    imagen: "/productos/cana.jpg",
  },
  {
    nombre: "Mochila Delta",
    detalle: "Impermeable, 25 litros",
    precio: "$98.000",
    imagen: "/productos/mochila.webp",
  },
];

export default function Distancia() {
  return (
    <section id="productos" className="px-2 py-16 md:px-6 md:py-20">
      <div className="flex items-start justify-between gap-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl uppercase leading-none md:text-5xl">
          <span className="font-light text-neutral-400">Diseñado </span>
          <span className="font-extrabold">para la distancia</span>
        </h2>
        <span className="font-[family-name:var(--font-display)] text-sm font-bold text-neutral-400">
          01
        </span>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-[1.4fr_1fr_1fr]">
        {productos.map((p) => (
          <article key={p.nombre}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-300">
              <Image
                src={p.imagen}
                alt={p.nombre}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-start justify-between gap-4 text-xs">
              <div>
                <h3 className="font-semibold">{p.nombre}</h3>
                <p className="mt-0.5 text-neutral-500">{p.detalle}</p>
              </div>
              <span className="font-medium">{p.precio}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}