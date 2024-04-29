"use client";

import Image, { StaticImageData } from "next/image";
import s from "./Card.component.module.scss";

import AnimationWrapper from "@/utils/AnimationWrapper/AnimationWrapper.component";
import { useState } from "react";

type CardProsps = {
  logo: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: StaticImageData;
};

function Card({
  logo,
  title,
  description,
  buttonText,
  buttonIcon,
}: CardProsps) {
  const [titleValue, setTitleValue] = useState<string>(title);
  const [descriptionValue, setDescriptionValue] = useState<string>(description);
  const [butonValue, setButtonValue] = useState<string>(buttonText);

  return (
    <AnimationWrapper className={s.cardWrapper}>
      <div className={s.cardWrapper__imageWrapper}>
        <Image width={50} height={50} src={logo} alt="card-logo" />
      </div>
      <div className={s.cardWrapper__textWrapper}>
        <input
          type="text"
          className={s.cardWrapper__textWrapper__title}
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <textarea
          defaultValue={""}
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          className={s.cardWrapper__textWrapper__description}
        >
          {" "}
        </textarea>
      </div>
      <div className={s.cardWrapper__actionWrapper}>
        <div className={s.cardWrapper__actionWrapper__action}>
          <input
            type="text"
            value={butonValue}
            onChange={(e) => setButtonValue(e.target.value)}
            className={s.cardWrapper__actionWrapper__action__text}
          />
          <Image src={buttonIcon} width={22} height={22} alt="arrow-icon" />
        </div>
      </div>
    </AnimationWrapper>
  );
}

export default Card;
