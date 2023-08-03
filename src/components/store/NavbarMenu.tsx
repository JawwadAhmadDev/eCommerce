"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export type NavbarContext = {
  isOpenMobileView: boolean;
  handleIsOpenMobileView: (isOpen: boolean) => void;
};

export const navbarContext = createContext<NavbarContext | null>(null);

const NavbarMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenMobileView, setIsOpenMobileView] = useState<boolean>(false);

  const handleIsOpenMobileView = (isOpen: boolean): void => {
    console.log("handleIsOpenMobileView", isOpenMobileView);
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

const useMobileView = () => {
  const mobileviewContext = useContext(navbarContext);
  return mobileviewContext;
};

export { NavbarMenuProvider, useMobileView };
