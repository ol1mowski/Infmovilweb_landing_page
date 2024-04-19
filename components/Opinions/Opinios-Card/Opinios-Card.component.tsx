import Image from "next/image";
import s from "./Opinios-Card.component.module.scss";

import quotes from "@/assets/icons/quotes.png";

function OpiniosCard() {
  return (
    <section className={s.container}>
      <div className={s.container__topSideOpinion}>
        <div className={s.container__topSideOpinion__quoteIcon}>
          <div className={s.container__topSideOpinion__quoteIcon__wrapper}>
            <Image className={s.container__topSideOpinion__quoteIcon__wrapper__icon} width={30} height={30} src={quotes} alt="quotes-icon" />
          </div>
        </div>
        <p className={s.container__topSideOpinion__description}>
          Had a problem with my laptop's charger. Was diagnosed in 3 minutes.
          Solution done. Problem solved.
        </p>
        <div className={s.container__topSideOpinion__user}>
          <span>Vadim Danilevichius</span>
        </div>
      </div>
      <div className={s.container__bottomSideOpinion}>
        <span>opinión de google mapas</span>
      </div>
    </section>
  );
}

export default OpiniosCard;
