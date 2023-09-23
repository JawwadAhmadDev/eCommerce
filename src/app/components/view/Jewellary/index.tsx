import React from "react";
import LeftPart from "./LeftPart";

type Props = {};

const Jewellary = (props: Props) => {
  return (
    <div>
      {/* Heading */}
      <div className="py-8">
        <h1 className="text-5xl font-semibold tracking-wide leading-snug">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>

      {/* Left */}
      <LeftPart />
    </div>
  );
};

export default Jewellary;
