"use client";
import {
  NavbarContext,
  useMobileView,
} from "@/components/store/NavbarMenuContext";
import {
  NavbarItemType,
  navbarItems,
} from "@/components/utils/NavbarDataAndTypes";
import Link from "next/link";
import React from "react";

type Props = {};

const MobileViewMenu = (_props: Props) => {
  const { isOpenMobileView, handleIsOpenMobileView } =
    useMobileView() as NavbarContext;

  return (
    <div>
      {isOpenMobileView && (
        <div className="mt-8 h-screen text-center mx-auto flex flex-col space-y-8">
          {navbarItems.map((_navbarItem) => {
            return (
              <div>
                <Link href={_navbarItem.href}>{_navbarItem.label}</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileViewMenu;
