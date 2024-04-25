import Image, { StaticImageData } from "next/image";
import s from "./AboutUS.component.module.scss";

import AnimationWrapper from "@/utils/AnimationWrapper/AnimationWrapper.component";


type AboutUSComponentProps = {
    title: string,
    description: string,
    category: string,
    buttonText: string,
    buttonIcon: StaticImageData;
    aboutUsImage: StaticImageData;
}

function AboutUSComponent({ title, category, description, buttonText, buttonIcon, aboutUsImage }: AboutUSComponentProps) {
  return (
    <AnimationWrapper className={s.container}>
      <section className={s.container__imageSection}>
        <div className={s.container__imageSection__frameOne}></div>
        <div className={s.container__imageSection__frameTwo}></div>
        <Image
          className={s.container__imageSection__img}
          width={300}
          height={290}
          src={aboutUsImage}
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
              { buttonText }
            </span>
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
