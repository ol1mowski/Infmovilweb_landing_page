"use client";

import { useEffect, useRef, useState } from "react";
import s from "./HomePage.component.module.scss";

function HomePage() {
  const header = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  console.log(scrollY);
  const handleScroll = () => {
    if (header.current) {
      if (scrollY > 46) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      ref={header}
      className={` ${isSticky ? s.sticky : s.container}`}
    ></section>
  );
}

export default HomePage;
