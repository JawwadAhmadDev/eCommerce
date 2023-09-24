import React from "react";

type Props = {};

const NewsLetter = (props: Props) => {
  return (
    <div className="py-24 flex flex-col relative justify-center items-center">
      {/* Watermark */}
      <div className="absolute inset-auto text-5xl xs:text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] text-zinc-800/10 font-extrabold tracking-wide leading-snug overflow-hidden">
        Newsletter
      </div>

      <h1 className="text-4xl text-zinc-800 leading-snug font-extrabold tracking-wider mb-2">
        Subscribe Our Newsletter
      </h1>

      <p className="text-lg mb-4 lg:mb-8">
        Get the latest information and promo offers directly
      </p>

      {/* Form */}
      <form
        action=""
        className="flex flex-col sm:flex-row sm:gap-2 justify-center items-center"
      >
        <input
          type="email"
          className="border border-gray-800 text-sm py-[0.45rem] mb-4 xs:mb-0 pl-8 w-64 xs:w-80"
          placeholder="Input email address"
        />
        <button className="text-sm flex-wrap font-bold bg-black text-white w-32 py-2 border-t-2 border-l-2 border-zinc-500 flex justify-center items-center">
          Get Started
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
