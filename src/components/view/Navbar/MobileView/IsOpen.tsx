"use client";
import React, { useContext, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import {
  NavbarMenuProvider,
  NavbarContext,
  useMobileView,
} from "@/app/store/NavbarMenuContext";

type Props = {};

const MobileViewOpen = (props: Props) => {
  const { isOpenMobileView, handleIsOpenMobileView } =
    useMobileView() as NavbarContext;
  return (
    <div>
      {/* Symbol to show or close menu */}
      <div onClick={() => handleIsOpenMobileView(!isOpenMobileView)}>
        {isOpenMobileView ? (
          <HiOutlineX size={25} />
        ) : (
          <RiMenu3Fill size={25} />
        )}
      </div>
    </div>
  );
};

export default MobileViewOpen;
