"use client";

import s from "./Items-Component.component.module.scss";

import { useState } from "react";

function Item({ item }: { item: string }) {
  const [itemValue, setItemValue] = useState<string>(item);

  return (
    <input
      type="text"
      key={item}
      value={itemValue}
      onChange={(e) => setItemValue(e.target.value)}
      className={s.wrapper__item}
    />
  );
}

export default Item;
