import Image from "next/image";
import React from "react";
import offProduct2 from "../../../../../../../../public/promotions/offProduct2.png";

type Props = {};

const Banner2 = (props: Props) => {
  return (
    <div className="bg-[#d7d7d9] pt-6 flex flex-col justify-between items-center w-full lg:h-full lg:min-w-fit">
      {/* Heading */}
      <div className="pl-9 w-full">
        <p className="tracking-wider font-medium">Flex Push Button Bomber</p>
        <span className="line-through">$225.00</span>
        <span className="pl-3 font-extrabold text-lg">$190.00</span>
      </div>
      {/* Picture */}
      <Image
        className="mt-4 lg:w-[280px] lg:h-[320px]"
        src={offProduct2}
        alt="off product 1"
        width={200}
        height={200}
      ></Image>
    </div>
  );
};

export default Banner2;
