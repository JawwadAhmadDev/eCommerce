import Hero from "@/app/components/view/HomePage/Hero";
import Promotions from "@/app/components/view/HomePage/Promotions";
import Products from "./components/view/HomePage/Products";
import Jewellary from "./components/view/HomePage/Jewellary";
import NewsLetter from "./components/view/HomePage/NewsLetter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      <Products />
      <Jewellary />
      <NewsLetter />
    </main>
  );
}
