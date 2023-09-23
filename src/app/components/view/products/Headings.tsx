import React from "react";

type Props = {};

const Headings = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h4 className="text-center text-blue-600 text-base uppercase font-extrabold">
        Products
      </h4>
      <h1 className="text-center text-4xl font-extrabold">
        Check What We Have
      </h1>
    </div>
  );
};

export default Headings;
