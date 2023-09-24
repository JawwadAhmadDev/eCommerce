import React from "react";
import Logo from "./Logo";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      {/* Footer */}
      <div>
        <Logo />
        {/* Company Links */}
        <div></div>

        {/* Support Links */}
        <div></div>

        {/* Contact Links */}
        <div></div>
      </div>

      {/* Copyright */}
      <div></div>
    </footer>
  );
};

export default Footer;
