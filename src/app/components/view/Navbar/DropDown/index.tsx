import { NavbarItemType } from "@/app/components/utils/NavbarDataAndTypes";
import Link from "next/link";
import React, { FC } from "react";

const DropDown: FC<{ item: NavbarItemType }> = ({ item }) => {
  return (
    <div>
      <ul>
        {item.dropDownData?.map((item: NavbarItemType, index: number) => {
          return (
            <div className="hover:font-bold hover:ml-2">
              <Link href={item.href}>{item.label}</Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
