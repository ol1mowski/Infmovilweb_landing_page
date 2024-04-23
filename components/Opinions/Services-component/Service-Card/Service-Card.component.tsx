import Image, { StaticImageData } from "next/image";
import s from "./Service-Card.component.module.scss";

import arrow from "@/assets/icons/arrow.png";
import AnimationWrapper from "@/utils/AnimationWrapper/AnimationWrapper.component";

type ServiceCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

function ServiceCard({ image, title, description }: ServiceCardProps) {
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
        <h3 className={s.servicesContainer__textWrapper__title}>{title}</h3>
        <p className={s.servicesContainer__textWrapper__description}>
          {description}
        </p>
      </div>
      <div className={s.servicesContainer__actionWrapper}>
        <span className={s.servicesContainer__actionWrapper__text}>
          leer más
        </span>
        <Image
          className={s.servicesContainer__actionWrapper__icon}
          src={arrow}
          alt="arrow-icon"
        />
      </div>
    </AnimationWrapper>
  );
}

export default ServiceCard;
