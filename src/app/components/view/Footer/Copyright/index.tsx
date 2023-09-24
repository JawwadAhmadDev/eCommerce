import React from "react";

type Props = {};

const Copyright = (props: Props) => {
  return (
    <div className="text-zinc-500 text-lg grid sm:grid-cols-2 sm:justify-between lg:grid-cols-3 lg:mt-24 lg:pt-0 gap-4 border-t border-[#666] pt-3 ">
      <p className="lg:my-6 lg:mx-24 lg:leading-tight">
        Copyright © 2022 Dine Market
      </p>

      <p className="lg:my-6 lg:mx-24 lg:leading-tight">
        Design by.{" "}
        <span className="text-lg text-zinc-900 font-bold">
          Weird Design Studio
        </span>
      </p>

      <p className="lg:my-6 lg:mx-24 lg:leading-tight">
        Code by.{" "}
        <span className="text-lg text-zinc-900 font-bold">
          shabrina12 on github
        </span>
      </p>
    </div>
  );
};

export default Copyright;
