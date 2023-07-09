import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-6  flex">
      <div className="w-36">
        <Image src={"/SiteLogo.png"} alt="Logo" width={500} height={500} />
      </div>
    </div>
  );
};

export default Navbar;
