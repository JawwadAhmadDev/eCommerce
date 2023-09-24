import React from "react";
import Logo from "./Logo";

type Props = {};

const FooterSection = (props: Props) => {
  return (
    <div className="grid gap-8 py-16 lg:grid-cols-[25rem,1fr,1fr,1fr]">
      <Logo />
      {/* Company Links */}
      <div>
        <h3 className="text-xl text-zinc-500 tracking-wide font-bold">
          Company
        </h3>
        <ul className="text-lg text-zinc-500">
          <li className="mt-4">About</li>
          <li className="mt-2">Terms of Use</li>
          <li className="mt-2">Privacy Policy</li>
          <li className="mt-2">How it Works</li>
          <li className="mt-2">Contact Us</li>
        </ul>
      </div>

      {/* Support Links */}
      <div>
        <h3 className="text-xl text-zinc-500 tracking-wide font-bold">
          Support
        </h3>
        <ul className="text-lg text-zinc-500">
          <li className="mt-4">Support Carrer</li>
          <li className="mt-2">24th Service</li>
          <li className="mt-2">Quick Chat</li>
        </ul>
      </div>

      {/* Contact Links */}
      <div>
        <h3 className="text-xl text-zinc-500 tracking-wide font-bold">
          Contact
        </h3>
        <ul className="text-lg text-zinc-500">
          <li className="mt-4">Whatsapp</li>
          <li className="mt-2">Support 24th</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
