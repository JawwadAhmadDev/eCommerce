"use client";
import { createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

type NavbarContext = {
  isOpenMobileView: boolean;
  handleIsOpenMobileView: (isOpen: boolean) => void;
};

export const navbarContext = createContext<NavbarContext | null>(null);

const NavbarMenuProvider = ({ children }: Props) => {
  const [isOpenMobileView, setIsOpenMobileView] = useState<boolean>(false);

  const handleIsOpenMobileView = (isOpen: boolean): void => {
    setIsOpenMobileView(isOpen);
  };
  return (
    <navbarContext.Provider
      value={{ isOpenMobileView, handleIsOpenMobileView }}
    >
      {children}
    </navbarContext.Provider>
  );
};

export default NavbarMenuProvider;
