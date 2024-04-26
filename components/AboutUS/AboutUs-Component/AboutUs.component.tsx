import Image from "next/image";
import s from "./AboutUS.component.module.scss";

import AnimationWrapper from "@/utils/AnimationWrapper/AnimationWrapper.component";
import { AboutUsDataType } from "@/utils/DataTypes/DataTypes";


function AboutUSComponent({
  title,
  category,
  description,
  button,
  image,
}: AboutUsDataType) {
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
          <span className={s.container__contentSection__infoWrapper__category}>
            {category}
          </span>
          <h3 className={s.container__contentSection__infoWrapper__title}>
            {title}
          </h3>
          <p className={s.container__contentSection__infoWrapper__description}>
            {description}
          </p>
        </div>
        <div className={s.container__contentSection__buttonSection}>
          <button className={s.container__contentSection__buttonSection__btn}>
            <span className={s.container__contentSection__buttonSection__text}>
              {button.buttonText}
            </span>
            <Image
              className={s.container__contentSection__buttonSection__btn__img}
              src={button.buttonIcon}
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
