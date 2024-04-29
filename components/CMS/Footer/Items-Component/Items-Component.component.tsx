"use client";

import { useState } from "react";
import s from "./Items-Component.component.module.scss";
import Item from "./Item.component";

type ItemsComponentProps = {
  title: string;
  items: string[];
};

function ItemsComponent({ title, items }: ItemsComponentProps) {
  const [titleValue, setTitleValue] = useState<string>(title);
  return (
    <div className={s.wrapper}>
      <input
        type="text"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
        className={s.wrapper__title}
      />
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </div>
  );
}

export default ItemsComponent;
