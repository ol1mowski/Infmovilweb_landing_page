import Image, { StaticImageData } from "next/image";
import s from "./Opinions.component.module.scss";

import arrow from "@/assets/icons/arrow.png";

import star from "@/assets/icons/star.png";
import OpiniosCard from "./Opinios-Card/Opinios-Card.component";
import { fetchElements } from "@/utils/http/http";

async function Opinions() {
  const fetchItems = await fetchElements("InfmovilwebCMS");

  type DataValue = {
    button: { buttonText: string; buttonIcon: StaticImageData };
    category: string;
    score: string;
    title: string;
    Cards: Array<{ author: string, opinion: string, icon: StaticImageData }>
  };

  const locationItem = fetchItems.find((item) => item.id === "Opinions");

  if (!locationItem) {
    throw new Error("Could not find");
  }

  const data: DataValue = locationItem;

console.log(data);


  const { title, score, category, button, Cards } = data;
  

  return (
    <section className={s.container}>
      <section className={s.container__infoSection}>
        <span className={s.container__infoSection__category}>{category}</span>

        <h3 className={s.container__infoSection__title}>{title}</h3>

        <button className={s.container__infoSection__btn}>
          <span>{button.buttonText}</span>{" "}
          <Image src={arrow} alt="arrow-icon" />
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
            key={o.author}
            description={o.opinion}
            author={o.author}
          />
        ))}
      </section>
    </section>
  );
}

export default Opinions;
