import Hero from "@/app/components/view/Hero";
import Promotions from "@/app/components/view/Promotions";
import Products from "./components/view/products";
import Jewellary from "./components/view/Jewellary";

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      <Products />
      <Jewellary />
    </main>
  );
}
