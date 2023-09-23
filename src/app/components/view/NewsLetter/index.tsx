import React from "react";

type Props = {};

const NewsLetter = (props: Props) => {
  return (
    <div className="py-24 flex flex-col relative justify-center items-center">
      <div className="absolute inset-auto text-7xl sm:text-8xl lg:text-[6.5rem] text-zinc-800/10 font-extrabold tracking-wide leading-snug overflow-hidden">
        Newsletter
      </div>
      <h1 className="text-4xl text-zinc-800 leading-snug font-bold tracking-wider mb-2">
        Subscribe Our Newsletter
      </h1>
      <p>Get the latest information and promo offers directly</p>
      <form action="">
        <input type="email" placeholder="input email address" />
        <button>Get Started</button>
      </form>
    </div>
  );
};

export default NewsLetter;
