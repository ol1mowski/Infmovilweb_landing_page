"use client";

import Header from "@/components/Header/Header.component";
import HeaderInfoBar from "@/components/HeaderInfoBar/HeaderInfoBar.component";
import HamburgerClickContext from "@/store/HamburgerClickContext";
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
      </body>
    </html>
  );
}

export default Root;
