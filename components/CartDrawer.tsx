"use client";

import Image from "next/image";
import { useCart } from "./CartProvider";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);

export default function CartDrawer() {
  const { items, count, isOpen, openCart, closeCart, changeQuantity, removeItem } = useCart();
  const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  const message = encodeURIComponent(
    `Hola! Quiero consultar por estos productos:\n${items
      .map((item) => `• ${item.nombre} x${item.cantidad}`)
      .join("\n")}\nTotal: ${formatPrice(total)}`,
  );

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          aria-label={`Abrir carrito con ${count} productos`}
          onClick={openCart}
          className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg transition-transform hover:scale-105 md:bottom-7 md:right-7"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-none stroke-current">
            <path
              d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L20.5 7H6"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          {count > 0 && (
            <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-[#c8102e] text-[11px] font-bold ring-2 ring-white">
              {count}
            </span>
          )}
        </button>
      )}
      {isOpen && (
        <button
          aria-label="Cerrar carrito"
          className="fixed inset-0 z-40 bg-black/40"
          onClick={closeCart}
        />
      )}
      <aside
        aria-label="Carrito"
        className={`fixed right-0 top-0 z-50 h-dvh w-full max-w-md bg-white p-5 text-neutral-900 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <h2 className="text-lg font-bold">Tu carrito</h2>
          <button
            type="button"
            aria-label="Cerrar"
            onClick={closeCart}
            className="grid size-9 place-items-center rounded-full bg-neutral-100"
          >
            ×
          </button>
        </div>

        <div className="h-[calc(100%-170px)] overflow-y-auto py-4">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-neutral-500">
              El carrito está vacío.
            </p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article key={item.id} className="flex gap-3">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                    <Image src={item.imagen} alt={item.nombre} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold">{item.nombre}</h3>
                      <p className="mt-1 text-xs text-neutral-500">
                        {formatPrice(item.precio)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => changeQuantity(item.id, item.cantidad - 1)}
                          className="size-7 rounded-full border border-neutral-300"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-xs">{item.cantidad}</span>
                        <button
                          type="button"
                          onClick={() => changeQuantity(item.id, item.cantidad + 1)}
                          className="size-7 rounded-full border border-neutral-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="self-start text-xs text-neutral-400 hover:text-neutral-900"
                    >
                      Quitar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-neutral-200 pt-4">
            <div className="mb-4 flex justify-between text-sm font-bold">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <a
              href={`https://wa.me/?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-full bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Consultar por WhatsApp
            </a>
          </div>
        )}
      </aside>
    </>
  );
}
