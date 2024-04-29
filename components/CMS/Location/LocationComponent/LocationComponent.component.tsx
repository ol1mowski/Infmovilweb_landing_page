"use client";

import Image, { StaticImageData } from "next/image";
import s from "./Location.component.module.scss";
import LocationMap from "../LocationMap/LocationMap.component";
import { useState } from "react";

type LocationComponentProps = {
  category: string;
  description: string;
  title: string;
  companyLocation: string;
  buttonText: string;
  buttonIcon: StaticImageData;
};

function LocationComponent({
  category,
  description,
  title,
  companyLocation,
  buttonIcon,
  buttonText,
}: LocationComponentProps) {
  const [categoryValue, setCategoryValue] = useState<string>(category);
  const [titleValue, setTitleValue] = useState<string>(title);
  const [descriptionValue, setDescriptionValue] = useState<string>(description);
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
        <textarea
          value={descriptionValue}
          wrap="true"
          onChange={(e) => setDescriptionValue(e.target.value)}
          className={s.container__infoSection__description}
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
      </section>
      <LocationMap companyLocation={companyLocation} />
    </section>
  );
}

export default LocationComponent;
