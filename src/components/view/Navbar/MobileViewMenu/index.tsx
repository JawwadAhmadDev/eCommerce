"use client";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";

type Props = {};

const MobileViewMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiOutlineX /> : <RiMenu3Fill />}
      </div>
    </div>
  );
};

export default MobileViewMenu;
