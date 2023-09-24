import React from "react";

type Props = {};

const SaleButton = (props: Props) => {
  return (
    <div>
      <span className="bg-blue-100 text-indigo-600 font-bold text-lg px-5 py-2 rounded-lg shadow-lg shadow-blue-500/50">
        Sale 70%
      </span>
    </div>
  );
};

export default SaleButton;
