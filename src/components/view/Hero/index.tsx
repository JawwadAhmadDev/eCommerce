import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      {/* Outer Div */}
      <div className="lg:grid og:grid-cols-2 py-16 my-8">
        <LeftPart />
        {/* <RightPart /> */}
      </div>
    </div>
  );
};

export default Hero;
