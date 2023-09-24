import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

type Props = {};

const Jewellary = (props: Props) => {
  return (
    <div>
      {/* Heading */}
      <div className="py-8 xl:mt-16 flex lg:justify-center xl:justify-end">
        <h1 className="text-5xl font-bold tracking-wide leading-snug lg:w-4/5 xl:w-[45%]">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>

      {/* Content */}
      <div className="grid gap-16 sm:py-8 xl:pt-0 xl:grid-cols-2 xl:items-center">
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
};

export default Jewellary;
