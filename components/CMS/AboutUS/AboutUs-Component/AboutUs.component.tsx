"use client";

import Image, { StaticImageData } from "next/image";
import s from "./AboutUS.component.module.scss";

import image from "@/assets/images/about_us.jpeg";

import AnimationWrapper from "@/utils/AnimationWrapper/AnimationWrapper.component";
import buttonIcon from "@/assets/icons/arrow.png";
import { useState } from "react";

type AboutUSComponentProps = {
  category: string;
  title: string;
  image: StaticImageData;
  description: string;
  buttonText: string;
  buttonIcon: StaticImageData;
};

function AboutUSComponent({
  title,
  category,
  description,
  buttonText,
}: AboutUSComponentProps) {
  const [categoryValue, setCategoryValue] = useState<string>(category);
  const [titleValue, setTitleValue] = useState<string>(title);
  const [descriptionValue, setDescriptionValue] = useState<string>(description);
  const [buttonTextValue, setButtonTextValue] = useState<string>(buttonText);

  return (
    <AnimationWrapper className={s.container}>
      <section className={s.container__imageSection}>
        <div className={s.container__imageSection__frameOne}></div>
        <div className={s.container__imageSection__frameTwo}></div>
        <Image
          className={s.container__imageSection__img}
          width={300}
          height={290}
          src={image}
          alt="about-company-image"
        />
      </section>
      <section className={s.container__contentSection}>
        <div className={s.container__contentSection__infoWrapper}>
          <input
            type="text"
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
            className={s.container__contentSection__infoWrapper__category}
          />

          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            className={s.container__contentSection__infoWrapper__title}
          />
          <textarea
            defaultValue={""}
            value={descriptionValue}
            wrap="true"
            onChange={(e) => setDescriptionValue(e.target.value)}
            className={s.container__contentSection__infoWrapper__description}
          ></textarea>
        </div>
        <div className={s.container__contentSection__buttonSection}>
          <button className={s.container__contentSection__buttonSection__btn}>
            <input
              type="text"
              value={buttonTextValue}
              onChange={(e) => setButtonTextValue(e.target.value)}
              className={s.container__contentSection__buttonSection__text}
            />

            <Image
              className={s.container__contentSection__buttonSection__btn__img}
              src={buttonIcon}
              width={25}
              height={25}
              alt="arrow-icon"
            />
          </button>
        </div>
      </section>
    </AnimationWrapper>
  );
}

export default AboutUSComponent;
