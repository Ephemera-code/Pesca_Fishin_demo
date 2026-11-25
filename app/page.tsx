import Hero from "@/components/Hero";
import Distancia from "@/components/Distancia";
import Categorias from "@/components/Categorias";
import Banner from "@/components/Banner";
import Control from "@/components/Control"
import { CartProvider } from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";



export default function Home() {
  return (
    <CartProvider>
      <main className="mx-auto max-w-[1440px] p-3 md:p-4">
        <Hero />
        <Distancia />
        <Control />
        <Categorias />
        <Banner />
      </main>
      <CartDrawer />
    </CartProvider>
  );
}