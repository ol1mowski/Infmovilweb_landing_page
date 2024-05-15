import s from "./Opinions.component.module.scss";

import Image from "next/image";

import { type OpinionsDataType } from "@/utils/DataTypes/DataTypes";

import star from "@/assets/icons/star.png";
import OpinionsCard from "../Opinions-Card/Opinions-Card.component";
import ButtonComponent from "@/UI/ButtonComponent/ButtonComponent.component";

function OpinionsComponent({
  sectionInfo,
  button,
  Cards,
}: OpinionsDataType[0]) {
  const { category, title, score } = sectionInfo;
  const { buttonText } = button;

  return (
    <section id="opinion" className={s.container}>
      <section className={s.container__infoSection}>
        <span className={s.container__infoSection__category}>{category}</span>
        <h3 className={s.container__infoSection__title}>{title}</h3>
        <a
          href="https://www.google.com/maps/place/INFMOVILWEB/@28.737026,-13.8717759,17z/data=!4m8!3m7!1s0xc463502049f0711:0xf040117382faf600!8m2!3d28.737026!4d-13.869201!9m1!1b1!16s%2Fg%2F11x9ptdtk?entry=ttu"
          target="_blank"
        >
          <ButtonComponent buttonText={buttonText} />
        </a>
        <div className={s.container__infoSection__score}>
          <Image src={star} alt="star-icon" />
          <span className={s.container__infoSection__score__content}>
            {score}
          </span>
        </div>
      </section>
      <section className={s.container__cardsWrapper}>
        {Cards.map((o) => (
          <OpinionsCard
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
