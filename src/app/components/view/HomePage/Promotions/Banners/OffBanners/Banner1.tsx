import Image from "next/image";
import React from "react";

type Props = {};

const Banner1 = (props: Props) => {
  return (
    <div className="bg-[#d6d6d8] px-8 pt-8 flex flex-col justify-between items-center xs:flex-row xs:px-8 sm:pt-0 shadow-lg">
      {/* Heading */}
      <div>
        <h3 className="text-[1.75rem] uppercase font-extrabold tracking-wide ">
          Get Up To <span className="text-4xl tracking-wider">60%</span>
        </h3>
        <p className="text-lg tracking-wide font-normal">
          For the summer season
        </p>
      </div>
      {/* picture */}
      <Image
        src="/promotions/offPicture.png"
        alt="off picture 1"
        width="200"
        height="180"
        className="sm:w-[250px] md:h-[220px] lg:w-[220px] lg:h-[200px]"
      ></Image>
    </div>
  );
};

export default Banner1;
