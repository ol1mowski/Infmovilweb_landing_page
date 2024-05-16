"use client";

import HamburgerClickContext from "@/store/HamburgerClickContext";
import { type ReactNode, useContext, useEffect, useRef, useState } from "react";

type HeaderAnimationWrapperProps = {
  children: ReactNode;
  stickyClass: string;
  normalClass: string;
};

function HeaderAnimationWrapper({
  children,
  stickyClass,
  normalClass,
}: HeaderAnimationWrapperProps) {
  const { isOpen } = useContext(HamburgerClickContext);

  const header = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (header.current) {
        if (scrollY > 46 && !isOpen) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);
  return (
    <>
      {!isOpen ? (
        <header
          ref={header}
          className={` ${isSticky ? stickyClass : normalClass}`}
        >
          {children}
        </header>
      ) : null}
    </>
  );
}

export default HeaderAnimationWrapper;
