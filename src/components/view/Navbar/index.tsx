import {
  NavbarItemType,
  navbarItems,
} from "@/components/utils/NavbarDataAndTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import DropDown from "./DropDown";
import MobileViewMenu from "./MobileViewMenu";
const Navbar = () => {
  return (
    <div className="py-6 flex justify-between items-center">
      {/* Logo */}
      <div className="w-36 flex-shrink-0">
        <Link href={"/"}>
          <Image src={"/SiteLogo.png"} alt="Logo" width={500} height={500} />
        </Link>
      </div>
      {/* Categories */}
      <div className="hidden lg:block">
        <div className="flex text-purple-950">
          <ul className="flex space-x-12 font-medium text-lg">
            {navbarItems.map((item: NavbarItemType, index: number) => {
              return (
                <li className="flex items-center hover:underline relative cursor-pointer group">
                  <Link href={item.href}>{item.label}</Link>
                  {item.isDropDown ? (
                    <RiArrowDownSFill
                      size={20}
                      className="mt-1 hover:rotate-180"
                    />
                  ) : (
                    ""
                  )}
                  {/* drop down menu: only shows when isDropDown is true */}

                  {item.isDropDown && (
                    <div
                      className={`invisible group-hover:visible top-7 py-1 px-2 left-0 bg-gray-200 rounded-lg absolute min-w-[7.8rem]`}
                    >
                      <DropDown item={item} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Search bar */}
      <div className="hidden lg:block">
        <div className="border rounded flex items-center w-96 text-gray-900 px-1">
          {/* Search logo */}
          <CiSearch />
          {/* Search bar */}
          <input
            type="text"
            placeholder="What you looking for"
            className="pl-1 pr-5 py-1 text-sm ring-0 outline-none w-full"
          />
        </div>
      </div>
      {/* Cart Button */}
      <div className="hidden lg:block">
        {/* Outer div */}
        <div className="relative w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
          <div className="w-5 h-5 flex justify-center items-center font-medium text-white text-xs absolute top-1 right-1 bg-red-500 rounded-full">
            3
          </div>
          <FiShoppingCart size={21} />
        </div>
      </div>

      {/* Menu in case of small screen */}
      <div className="lg:hidden">
        <MobileViewMenu />
      </div>
    </div>
  );
};

export default Navbar;
