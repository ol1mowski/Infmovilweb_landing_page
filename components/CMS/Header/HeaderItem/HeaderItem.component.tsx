"use client";

import { useState } from "react";
import s from "./HeaderItem.component.module.scss";

function HeaderItem({ item }: { item: string }) {
  const [value, setValue] = useState<string>(item);

  return (
    <input
      type="text"
      className={s.item}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default HeaderItem;
