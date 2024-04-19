import Image from "next/image";
import s from "./Opinios-Card.component.module.scss";

import quotes from "@/assets/icons/quotes.png";

type OpinionsCardProps = {
  description: string;
  author: string;
};

function OpiniosCard({ description, author }: OpinionsCardProps) {
  return (
    <section className={s.container}>
      <div className={s.container__topSideOfOpinion}>
        <div className={s.container__topSideOfOpinion__quoteIcon}>
          <div className={s.container__topSideOfOpinion__quoteIcon__wrapper}>
            <Image
              className={
                s.container__topSideOfOpinion__quoteIcon__wrapper__icon
              }
              width={40}
              height={40}
              src={quotes}
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
    </section>
  );
}

export default OpiniosCard;
