import Image from "next/image";
import React from "react";

type Props = {};

const Banner1 = (props: Props) => {
  return (
    <div className="bg-[#d6d6d8] px-8 pt-8 flex flex-col justify-between items-center">
      {/* Heading */}
      <div>
        <h3 className="text-[1.75rem] uppercase font-extrabold tracking-wide">
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
      ></Image>
    </div>
  );
};

export default Banner1;
