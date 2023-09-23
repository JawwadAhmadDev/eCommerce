import React from "react";

type Props = {};

const LeftPart = (props: Props) => {
  return (
    <div>
      {/* Portions */}
      <div className="relative grid grid-cols-2 justify-between place-items-center gap-8">
        {/* WaterMark */}
        <h1 className="absolute inset-auto text-7xl sm:text-8xl lg:text-[6.5rem] text-zinc-800/10 font-extrabold tracking-wide leading-snug overflow-hidden">
          Different from others
        </h1>

        {/* 1 */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-800 mb-3">
            Using Good Quality Materials
          </h3>
          <p className="text-lg font-light text-zinc-800">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
          </p>
        </div>
        {/* 2 */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-800 mb-3">
            100% Handmade Products
          </h3>
          <p className="text-lg font-light text-zinc-800">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
          </p>
        </div>
        {/* 3 */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-800 mb-3">
            Modern Fashion Design
          </h3>
          <p className="text-lg font-light text-zinc-800">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
          </p>
        </div>
        {/* 4 */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-800 mb-3">
            Discount for Bulk Orders
          </h3>
          <p className="text-lg font-light text-zinc-800">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
