import Image, { StaticImageData } from "next/image";
import s from "./Card.component.module.scss";

import arrow from "@/assets/icons/arrow.png";
import AnimationWrapper from "@/utils/AnimationWrapper/AnimationWrapper.component";

type CardProsps = {
  logo: StaticImageData;
  title: string;
  description: string;
};

function Card({ logo, title, description }: CardProsps) {
  return (
    <AnimationWrapper className={s.cardWrapper}>
      <div className={s.cardWrapper__imageWrapper}>
        <Image width={50} height={50} src={logo} alt="card-logo" />
      </div>
      <div className={s.cardWrapper__textWrapper}>
        <h3 className={s.cardWrapper__textWrapper__title}>{title}</h3>
        <p className={s.cardWrapper__textWrapper__description}>{description}</p>
      </div>
      <div className={s.cardWrapper__actionWrapper}>
        <div className={s.cardWrapper__actionWrapper__action}>
          <span>leer más</span>{" "}
          <Image src={arrow} width={22} height={22} alt="arrow-icon" />
        </div>
      </div>
    </AnimationWrapper>
  );
}

export default Card;
