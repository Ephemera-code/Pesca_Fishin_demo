import Link from "next/link";

const columnas = [
  { titulo: "Tienda", links: ["Cañas", "Ropa", "Accesorios", "Señuelos"] },
  { titulo: "Ayuda", links: ["Envíos", "Cambios", "Contacto"] },
];

export default function Footer() {
  return (
    <footer className="px-6 py-10 md:px-10">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-bold">
            Pesca Fishing
          </p>
          <p className="mt-2 max-w-xs text-xs text-white/60">
            Equipos de pesca para río, laguna y mar.
          </p>
        </div>

        {columnas.map((col) => (
          <div key={col.titulo}>
            <p className="text-xs font-semibold">{col.titulo}</p>
            <ul className="mt-3 space-y-2 text-xs text-white/60">
              {col.links.map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-white">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-xs font-semibold">Ofertas por mail</p>
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="tu@email.com"
              aria-label="Email"
              className="w-full rounded-md bg-white/10 px-3 py-2 text-xs placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-white"
            />
            <button className="rounded-md bg-[#c8102e] px-3 py-2 text-xs font-medium hover:bg-[#a30d25]">
              Suscribirme
            </button>
          </div>
        </div>
      </div>

      <p className="mt-10 text-[11px] text-white/40">© 2026 Pesca Fishing. Demo.</p>
    </footer>
  );
}