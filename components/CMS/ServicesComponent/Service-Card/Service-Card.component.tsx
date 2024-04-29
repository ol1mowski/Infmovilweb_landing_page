"use client";

import Image, { StaticImageData } from "next/image";
import s from "./Service-Card.component.module.scss";

import AnimationWrapper from "@/utils/AnimationWrapper/AnimationWrapper.component";
import { useState } from "react";

type ServiceCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: StaticImageData;
};

function ServiceCard({
  image,
  title,
  description,
  buttonText,
  buttonIcon,
}: ServiceCardProps) {
  const [titleValue, setTitleValue] = useState<string>(title);
  const [descriptionValue, setDescriptionValue] = useState<string>(description);
  const [buttonTextValue, setButtonTextValue] = useState<string>(buttonText);

  return (
    <AnimationWrapper className={s.servicesContainer}>
      <div className={s.servicesContainer__imageWrapper}>
        <Image
          width={270}
          height={200}
          className={s.servicesContainer__imageWrapper__img}
          src={image}
          alt="service-image"
        />
      </div>
      <div className={s.servicesContainer__textWrapper}>
        <input
          type="text"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          className={s.servicesContainer__textWrapper__title}
        />
        <textarea
          defaultValue={""}
          value={descriptionValue}
          wrap="true"
          onChange={(e) => setDescriptionValue(e.target.value)}
          className={s.servicesContainer__textWrapper__description}
        >
          {" "}
        </textarea>
      </div>
      <div className={s.servicesContainer__actionWrapper}>
        <input
          type="text"
          value={buttonTextValue}
          onChange={(e) => setButtonTextValue(e.target.value)}
          className={s.servicesContainer__actionWrapper__text}
        />
        <Image
          className={s.servicesContainer__actionWrapper__icon}
          src={buttonIcon}
          alt="arrow-icon"
          width={25}
          height={25}
        />
      </div>
    </AnimationWrapper>
  );
}

export default ServiceCard;
