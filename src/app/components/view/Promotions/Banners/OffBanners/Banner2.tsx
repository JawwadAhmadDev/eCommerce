import React from "react";

type Props = {};

const Banner2 = (props: Props) => {
  return (
    <div className="bg-neutral-900 text-white p-8 flex flex-col justify-center items-center sm:p-12 lg:p-8 lg:pt-12">
      <h3 className="text-4xl font-bold mb-4">GET 30% Off</h3>
      <p className="tracking-wider text-sm">USE PROMO CODE</p>
      <button className="bg-neutral-700 text-base font-bold py-2 px-12 tracking-[6px] rounded-lg mt-1 shadow-lg">
        DINEWEEKENDSALE
      </button>
    </div>
  );
};

export default Banner2;
