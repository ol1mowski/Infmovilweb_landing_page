"use client";

import { useState } from "react";
import FooterCopyright from "../FooterCopyright/FooterCopyright.component";
import ItemsComponent from "../Items-Component/Items-Component.component";
import s from "./Footer.component.module.scss";

type FooterComponentProps = {
  items: Array<{ id: string; items: string[]; title: string }>;
  title: string;
  description: string;
};

function FooterComponent({ items, title, description }: FooterComponentProps) {
  const [titleValue, setTitleValue] = useState<string>(title);
  const [descriptionValue, setDescriptionValue] = useState<string>(description);

  return (
    <footer className={s.container}>
      <section className={s.container__itemsContainer}>
        {items.map((i) => (
          <ItemsComponent key={i.id} items={i.items} title={i.title} />
        ))}
        <div className={s.container__itemsContainer__wrapper}>
          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            className={s.container__itemsContainer__wrapper__title}
          />

          <textarea
            value={descriptionValue}
            wrap="true"
            onChange={(e) => setDescriptionValue(e.target.value)}
            className={s.container__itemsContainer__wrapper__companyInfo}
          />
        </div>
      </section>
      <FooterCopyright />
    </footer>
  );
}

export default FooterComponent;
