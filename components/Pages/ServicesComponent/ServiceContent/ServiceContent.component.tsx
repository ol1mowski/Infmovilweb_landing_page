import s from "./Services.component.module.scss";

import ServiceCard from "../Service-Card/Service-Card.component";
import { type ServicesDataType } from "@/Types/DataTypes";


function ServiceContent({ Cards, sectionInfo }: ServicesDataType[0]) {

  const { title, category } = sectionInfo;

  return (
    <section id="services" className={s.container}>
      <section className={s.container__header}>
        <span className={s.container__header__category}>{category}</span>
        <h2 className={s.container__header__title}>{title}</h2>
      </section>
      <section className={s.container__cardsWrapper}>
        {Cards.map((s) => (
          <ServiceCard
            key={s.title}
            image={s.image}
            buttonIcon={s.button.buttonIcon}
            buttonText={s.button.buttonText}
            description={s.description}
            title={s.title}
          />
        ))}
      </section>
    </section>
  );
}

export default ServiceContent;
