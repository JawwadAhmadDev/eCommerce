import Image from "next/image";
import React from "react";
import offProduct1 from "../../../../../../../public/promotions/offProduct1.png";

type Props = {};

const Banner1 = (props: Props) => {
  return (
    <div className="bg-[#efe1c7] pt-6 flex flex-col justify-between items-center">
      {/* Heading */}
      <div className="pl-9 w-full">
        <p className="tracking-wider font-medium">Flex Sweatshirt</p>
        <span className="line-through">$100.00</span>
        <span className="pl-3 font-extrabold text-lg">$75.00</span>
      </div>
      {/* Picture */}
      <Image
        className="mt-4"
        src={offProduct1}
        alt="off product 1"
        width={200}
        height={200}
      ></Image>
    </div>
  );
};

export default Banner1;
