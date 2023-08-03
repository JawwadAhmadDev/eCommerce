"use client";
import {
  NavbarContext,
  useMobileView,
} from "@/components/store/NavbarMenuContext";
import React from "react";

type Props = {};

const MobileViewMenu = (props: Props) => {
  const { isOpenMobileView, handleIsOpenMobileView } =
    useMobileView() as NavbarContext;

  return (
    <div className="h-screen text-center mx-auto">
      {isOpenMobileView && (
        <div>
          <div>hellow</div>
          <div>hellow</div>
          <div>hellow</div>
          <div>hellow</div>
        </div>
      )}
    </div>
  );
};

export default MobileViewMenu;
