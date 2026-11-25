import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

export default function Banner() {
  return (
    <section className="overflow-hidden rounded-2xl bg-neutral-950 text-white">
      <div className="relative">
        <Image
          src="/productos/banner.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="relative z-10 max-w-xl px-6 py-20 md:px-10 md:py-28">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase leading-none md:text-6xl">
            Listo para lanzar sin límites
          </h2>
          <Link
            href="#categorias"
            className="mt-8 inline-block rounded-md bg-[#c8102e] px-5 py-2.5 text-xs font-semibold transition-colors hover:bg-[#a30d25] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Armar mi equipo
          </Link>
        </div>
      </div>

      <section className="border-t border-white/10 px-6 py-10 md:px-10">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
            Nuestra tienda
          </p>
          <address className="mt-2 not-italic text-sm">
            Alfonsina Storni 2951, B1619DKI Garin, Provincia de Buenos Aires
          </address>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <iframe
            title="Ubicación de Pesca Fishing"
            src="https://www.google.com/maps?q=Alfonsina%20Storni%202951%2C%20Gar%C3%ADn%2C%20Buenos%20Aires&output=embed"
            className="h-72 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <Footer />
    </section>
  );
}