import React from "react";
import { FaShoppingCart } from "react-icons/fa";

type Props = {};

const StartShopping = (props: Props) => {
  return (
    <button className="bg-black text-white text-lg font-bold p-4 border-gray-500 border-t-2 border-l-2 max-w-[70%] lg:max-w-[30%] xl:max-w-[50%] lg:p-2">
      <div className="flex justify-center gap-x-3 items-center lg:gap-0 xl:gap-3 xl:py-2 xl:text-xl lg:mx-2 lg:my-0">
        <FaShoppingCart fill="white" size="25px" />
        <div>Start Shopping</div>
      </div>
    </button>
  );
};

export default StartShopping;
