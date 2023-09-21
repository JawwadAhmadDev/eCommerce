import Image from "next/image";
import React from "react";
import offProduct1 from "../../../../../../../public/promotions/offProduct1.png";

type Props = {};

const Banner1 = (props: Props) => {
  return (
    <div>
      {/* Heading */}
      <div>
        <p>Flex Sweatshirt</p>
        <div className="relative">
          <span className="">$100.00</span>
          <span className="absolute left-0">hello</span>
          <span>$75.00</span>
        </div>
      </div>
      {/* Picture */}
      <Image
        src={offProduct1}
        alt="off product 1"
        width={100}
        height={100}
      ></Image>
    </div>
  );
};

export default Banner1;
