"use client";
import { FaShoppingCart } from "react-icons/fa";
type Props = {};

const LeftPart = (props: Props) => {
  return (
    <div className="flex flex-col">
      {/* Sale Logo */}
      <div>
        <span className="bg-blue-100 text-indigo-600 font-medium text-lg px-5 py-2 rounded-lg">
          Sale 70%
        </span>
      </div>

      {/* Industrial Text */}
      <h1 className="text-6xl font-bold">An Industrial Take on Streetwear</h1>

      {/* Paragraph */}
      <p className="text-gray-600 sm:max-w-[80%]">
        Anyone can beat you but no one can beat your outfit as long as you wear
        Dine outfits.
      </p>

      {/* Start Shopping button */}
      <button className="bg-black text-white text-lg font-semibold p-4 border-gray-500 border-t-2 border-l-2 max-w-[70%]">
        <div className="flex justify-center gap-x-3 items-center">
          <FaShoppingCart fill="white" size="25px" />
          <div>Start Shopping</div>
        </div>
      </button>
    </div>
  );
};

export default LeftPart;
