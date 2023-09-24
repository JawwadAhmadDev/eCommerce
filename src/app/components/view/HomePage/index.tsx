import Hero from "./Hero";
import Jewellary from "./Jewellary";
import NewsLetter from "./NewsLetter";
import Products from "./Products";
import Promotions from "./Promotions";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Hero />
      <Promotions />
      <Products />
      <Jewellary />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
