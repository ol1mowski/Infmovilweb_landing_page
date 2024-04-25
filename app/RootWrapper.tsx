"use client";

import HamburgerClickContext from "@/store/HamburgerClickContext";
import { queryClient } from "@/utils/http/http";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";

type RootWrapperProps = {
    children: ReactNode;
}

function RootWrapper({ children }: RootWrapperProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <HamburgerClickContext.Provider
        value={{
          isOpen: open,
          setOpen: (open: boolean) => setOpen(open),
        }}
      >
        {children}
      </HamburgerClickContext.Provider>
    </QueryClientProvider>
  );
}

export default RootWrapper;
