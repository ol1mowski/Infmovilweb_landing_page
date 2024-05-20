"use client";

import HamburgerClickContext from "@/store/HamburgerClickContext";
import PopUpClickContext from "@/store/PopUpClickContent";
import { type ReactNode, useState } from "react";

type RootWrapperProps = {
  children: ReactNode;
};

function RootWrapper({ children }: RootWrapperProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [popUpOpen, setPopUpOpen] = useState<{
    open: boolean;
    action: string;
    status: string;
  }>({ open: false, action: "", status: "" });

  return (
    <HamburgerClickContext.Provider
      value={{
        isOpen: open,
        setOpen: (open: boolean) => setOpen(open),
      }}
    >
      <PopUpClickContext.Provider
        value={{
          popUp: popUpOpen,
          setPopUp: (open: boolean, action: string, status: string) =>
            setPopUpOpen({ open: open, action: action, status: status }),
        }}
      >
        {children}
      </PopUpClickContext.Provider>
    </HamburgerClickContext.Provider>
  );
}

export default RootWrapper;
