"use client";
import React, { useContext, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import {
  NavbarMenuProvider,
  NavbarContext,
  useMobileView,
} from "@/components/store/NavbarMenu";

type Props = {};

const MobileViewMenu = (props: Props) => {
  const { isOpenMobileView, handleIsOpenMobileView } =
    useMobileView() as NavbarContext;
  return (
    <div>
      <div onClick={() => handleIsOpenMobileView(!isOpenMobileView)}>
        {isOpenMobileView ? <HiOutlineX /> : <RiMenu3Fill />}
      </div>
    </div>
  );
};

export default MobileViewMenu;
