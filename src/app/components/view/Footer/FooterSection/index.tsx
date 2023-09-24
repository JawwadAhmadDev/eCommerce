import React from "react";
import Logo from "./Logo";
import Link from "next/link";

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
          <Link href="#">
            <li className="mt-4">About</li>
          </Link>
          <Link href="#">
            <li className="mt-2">Terms of Use</li>
          </Link>
          <Link href="#">
            <li className="mt-2">Privacy Policy</li>
          </Link>
          <Link href="#">
            <li className="mt-2">How it Works</li>
          </Link>
          <Link href="#">
            <li className="mt-2">Contact Us</li>
          </Link>
        </ul>
      </div>

      {/* Support Links */}
      <div>
        <h3 className="text-xl text-zinc-500 tracking-wide font-bold">
          Support
        </h3>
        <ul className="text-lg text-zinc-500">
          <Link href="#">
            <li className="mt-4">Support Carrer</li>
          </Link>
          <Link href="#">
            <li className="mt-2">24th Service</li>
          </Link>
          <Link href="#">
            <li className="mt-2">Quick Chat</li>
          </Link>
        </ul>
      </div>

      {/* Contact Links */}
      <div>
        <h3 className="text-xl text-zinc-500 tracking-wide font-bold">
          Contact
        </h3>
        <ul className="text-lg text-zinc-500">
          <Link href="#">
            <li className="mt-4">Whatsapp</li>
          </Link>
          <Link href="#">
            <li className="mt-2">Support 24th</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
