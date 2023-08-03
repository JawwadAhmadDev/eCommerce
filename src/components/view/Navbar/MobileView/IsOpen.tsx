"use client";
import React, { useContext, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import {
  NavbarMenuProvider,
  NavbarContext,
  useMobileView,
} from "@/components/store/NavbarMenuContext";

type Props = {};

const MobileViewOpen = (props: Props) => {
  const { isOpenMobileView, handleIsOpenMobileView } =
    useMobileView() as NavbarContext;
  return (
    <div>
      {/* Symbol to show or close menu */}
      <div onClick={() => handleIsOpenMobileView(!isOpenMobileView)}>
        {isOpenMobileView ? <HiOutlineX /> : <RiMenu3Fill />}
      </div>
    </div>
  );
};

export default MobileViewOpen;
