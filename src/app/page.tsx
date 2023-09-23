import Hero from "@/app/components/view/Hero";
import Promotions from "@/app/components/view/Promotions";
import Products from "./components/view/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      <Products />
    </main>
  );
}
