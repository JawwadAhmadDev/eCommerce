import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      {/* Outer Div */}
      <div className="md:grid md:grid-cols-2">
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
};

export default Hero;
