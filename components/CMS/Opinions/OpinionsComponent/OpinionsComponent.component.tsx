"use client";

import Image, { StaticImageData } from "next/image";
import s from "./Opinions.component.module.scss";

import star from "@/assets/icons/star.png";
import OpinionsCard from "../Opinions-Card/Opinions-Card.component";
import { useState } from "react";

type OpinionsComponentProps = {
  buttonText: string;
  buttonIcon: StaticImageData;
  Cards: Array<{ author: string; opinion: string; icon: StaticImageData }>;
  category: string;
  score: string;
  title: string;
};

function OpinionsComponent({
  category,
  title,
  buttonIcon,
  buttonText,
  score,
  Cards,
}: OpinionsComponentProps) {
  const [categoryValue, setCategoryValue] = useState<string>(category);
  const [titleValue, setTitleValue] = useState<string>(title);
  const [buttonTextValue, setButtonTextValue] = useState<string>(buttonText);

  return (
    <section className={s.container}>
      <section className={s.container__infoSection}>
        <input
          type="text"
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
          className={s.container__infoSection__category}
        />
        <input
          type="text"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          className={s.container__infoSection__title}
        />
        <button className={s.container__infoSection__btn}>
          <input
            type="text"
            value={buttonTextValue}
            onChange={(e) => setButtonTextValue(e.target.value)}
            className={s.container__infoSection__btn__text}
          />
          <Image width={25} height={25} src={buttonIcon} alt="arrow-icon" />
        </button>
        <div className={s.container__infoSection__score}>
          <Image src={star} alt="star-icon" />
          <span className={s.container__infoSection__score__content}>
            {score}
          </span>
        </div>
      </section>
      <section className={s.container__cardsWrapper}>
        {Cards.map((o) => (
          <OpinionsCard
            icon={o.icon}
            key={o.author}
            description={o.opinion}
            author={o.author}
          />
        ))}
      </section>
    </section>
  );
}

export default OpinionsComponent;
