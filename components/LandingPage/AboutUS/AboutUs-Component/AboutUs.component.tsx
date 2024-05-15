import Image, { type StaticImageData } from "next/image";
import s from "./AboutUS.component.module.scss";

import AnimationWrapper from "@/utils/AnimationWrapper/AnimationWrapper.component";
import ButtonComponent from "@/UI/ButtonComponent/ButtonComponent.component";
import ScrollLink from "@/utils/ScrollLink/ScrollLink.component";

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
  buttonIcon,
  image,
}: AboutUSComponentProps) {
  return (
    <AnimationWrapper className={s.container}>
      <section id="about" className={s.container__imageSection}>
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
          <ScrollLink link="#services">
            <ButtonComponent buttonText={buttonText} />
          </ScrollLink>
        </div>
      </section>
    </AnimationWrapper>
  );
}

export default AboutUSComponent;
