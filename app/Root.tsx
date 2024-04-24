"use client";

import Header from "@/components/Header/Header.component";
import HeaderInfoBar from "@/components/HeaderInfoBar/HeaderInfoBar.component";
import HamburgerClickContext from "@/store/HamburgerClickContext";
import { queryClient } from "@/utils/http/http";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState<boolean>(false);


  return (
    <html lang="pl-PL">
      <body>
        <QueryClientProvider client={queryClient}>
          <HamburgerClickContext.Provider
            value={{
              isOpen: open,
              setOpen: (open: boolean) => setOpen(open),
            }}
          >
            <HeaderInfoBar />
            <Header />
            {children}
          </HamburgerClickContext.Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default Root;
