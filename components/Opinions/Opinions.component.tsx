import Image from "next/image";
import s from "./Opinions.component.module.scss";

import arrow from "@/assets/icons/arrow.png";

import star from "@/assets/icons/star.png";
import OpiniosCard from "./Opinios-Card/Opinios-Card.component";
import { OPINIONS } from "@/data/Opinions";

function Opinions() {
  return (
    <section className={s.container}>
      <section className={s.container__infoSection}>
        <span className={s.container__infoSection__category}>opiniones</span>

        <h3 className={s.container__infoSection__title}>
          Nuestros clientes están satisfechos
        </h3>

        <button className={s.container__infoSection__btn}>
          <span>ver todas las opiniones</span>{" "}
          <Image src={arrow} alt="arrow-icon" />
        </button>

        <div className={s.container__infoSection__score}>
          <Image src={star} alt="star-icon" />
          <span className={s.container__infoSection__score__content}>
            4.1/5
          </span>
        </div>
      </section>
      <section className={s.container__cardsWrapper}>
        {OPINIONS.map((o) => (
          <OpiniosCard
            key={o.id}
            description={o.description}
            author={o.author}
          />
        ))}
      </section>
    </section>
  );
}

export default Opinions;
