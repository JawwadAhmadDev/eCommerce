"use client";
import { NavbarContext, useMobileView } from "@/app/store/NavbarMenuContext";
import {
  NavbarItemType,
  navbarItems,
} from "@/app/components/utils/NavbarDataAndTypes";
import Link from "next/link";
import React from "react";
import Cart from "../Cart";

type Props = {};

const MobileViewMenu = (_props: Props) => {
  const { isOpenMobileView, handleIsOpenMobileView } =
    useMobileView() as NavbarContext;

  return (
    <div>
      {isOpenMobileView && (
        <div>
          {/* Cart */}
          <div className="flex justify-center my-5">
            <Cart />
          </div>
          <div className="mt-8 h-screen text-center mx-auto flex flex-col space-y-4">
            {navbarItems.map((_navbarItem, index) => {
              return (
                <div key={index}>
                  <Link href={_navbarItem.href}>{_navbarItem.label}</Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileViewMenu;
