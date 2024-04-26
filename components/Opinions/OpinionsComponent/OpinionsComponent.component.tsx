import Image, { StaticImageData } from "next/image";
import s from "./Opinions.component.module.scss";

import star from "@/assets/icons/star.png";
import OpiniosCard from "../Opinions-Card/Opinios-Card.component";

type OpinionsComponentProps = {
  buttonText: string;
  buttonIcon: StaticImageData;
  Cards: Array<{ author: string; opinion: string; icon: StaticImageData }>;
  category: string;
  score: string;
  title: string;
};

function OpinionsComponent({
  category,
  title,
  buttonIcon,
  buttonText,
  score,
  Cards,
}: OpinionsComponentProps) {
  return (
    <section className={s.container}>
      <section className={s.container__infoSection}>
        <span className={s.container__infoSection__category}>{category}</span>
        <h3 className={s.container__infoSection__title}>{title}</h3>
        <button className={s.container__infoSection__btn}>
          <span>{buttonText}</span>{" "}
          <Image width={25} height={25} src={buttonIcon} alt="arrow-icon" />
        </button>
        <div className={s.container__infoSection__score}>
          <Image src={star} alt="star-icon" />
          <span className={s.container__infoSection__score__content}>
            {score}
          </span>
        </div>
      </section>
      <section className={s.container__cardsWrapper}>
        {Cards.map((o) => (
          <OpiniosCard
            icon={o.icon}
            key={o.author}
            description={o.opinion}
            author={o.author}
          />
        ))}
      </section>
    </section>
  );
}

export default OpinionsComponent;
