"use client";

import { type StaticImageData } from "next/image";
import ServiceCard from "../Service-Card/Service-Card.component";
import s from "./Services.component.module.scss";
import { useState } from "react";

type ServiceContentProps = {
  category: string;
  title: string;
  Cards: Array<{
    description: string;
    title: string;
    image: StaticImageData;
    button: { buttonText: string; buttonIcon: StaticImageData };
  }>;
};

function ServiceContent({ Cards, category, title }: ServiceContentProps) {
  const [categoryValue, setCategoryValue] = useState<string>(category);
  const [titleValue, setTitleValue] = useState<string>(title);

  return (
    <section className={s.container}>
      <section className={s.container__header}>
        <input
          type="text"
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
          className={s.container__header__category}
        />
        <input
          type="text"
          className={s.container__header__title}
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
      </section>
      <section className={s.container__cardsWrapper}>
        {Cards.map((s) => (
          <ServiceCard
            key={s.title}
            image={s.image}
            buttonIcon={s.button.buttonIcon}
            buttonText={s.button.buttonText}
            description={s.description}
            title={s.title}
          />
        ))}
      </section>
    </section>
  );
}

export default ServiceContent;
