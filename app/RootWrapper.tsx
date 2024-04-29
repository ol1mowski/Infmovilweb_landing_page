"use client";

import HamburgerClickContext from "@/store/HamburgerClickContext";
import PopUpClickContext from "@/store/PopUpClickContent";
import { queryClient } from "@/utils/http/http";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default RootWrapper;
