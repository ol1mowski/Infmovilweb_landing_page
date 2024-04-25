import Image, { StaticImageData } from "next/image";
import s from "./Opinios-Card.component.module.scss";

import AnimationWrapper from "@/utils/AnimationWrapper/AnimationWrapper.component";

type OpinionsCardProps = {
  description: string;
  author: string;
  icon: StaticImageData;
};

function OpiniosCard({ description, author, icon }: OpinionsCardProps) {
  return (
    <AnimationWrapper className={s.container}>
      <div className={s.container__topSideOfOpinion}>
        <div className={s.container__topSideOfOpinion__quoteIcon}>
          <div className={s.container__topSideOfOpinion__quoteIcon__wrapper}>
            <Image
              className={
                s.container__topSideOfOpinion__quoteIcon__wrapper__icon
              }
              width={40}
              height={40}
              src={icon}
              alt="quotes-icon"
            />
          </div>
        </div>
        <div className={s.container__topSideOfOpinion__content}>
          <p className={s.container__topSideOpinion__content__description}>
            {description}
          </p>
          <span className={s.container__topSideOfOpinion__content__user}>
            {author}
          </span>
        </div>
      </div>
      <div className={s.container__bottomSideOpinion}>
        <span>opinión de google mapas</span>
      </div>
    </AnimationWrapper>
  );
}

export default OpiniosCard;
