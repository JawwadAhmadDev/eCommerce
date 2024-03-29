import SaleButton from "./SaleButton";
import Sponsers from "./Sponsers";
import StartShopping from "./StartShopping";
type Props = {};

const LeftPart = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-10 pt-12 pb-4 justify-between">
      {/* Sale Logo */}
      <SaleButton />

      {/* Industrial Text */}
      <h1 className="text-5xl xl:text-6xl  font-extrabold">
        An Industrial Take on Streetwear
      </h1>

      {/* Paragraph */}
      <p className="text-gray-600 text-lg sm:max-w-[80%] lg:max-w-[55%]">
        Anyone can beat you but no one can beat your outfit as long as you wear
        Dine outfits.
      </p>

      {/* Start Shopping button */}
      <StartShopping />

      {/* sponsers */}
      <Sponsers />
    </div>
  );
};

export default LeftPart;
