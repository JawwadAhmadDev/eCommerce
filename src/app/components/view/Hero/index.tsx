import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      {/* Outer Div */}
      <div className="lg:grid lg:grid-cols-[45%,55%] xl:gap-4 xl:justify-items-center lg:gap-2 py-16 my-8 lg:py-0 lg:my-16 lg:relative">
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
};

export default Hero;
