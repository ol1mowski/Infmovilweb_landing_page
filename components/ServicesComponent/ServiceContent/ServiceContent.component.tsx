import { type StaticImageData } from "next/image";
import ServiceCard from "../Service-Card/Service-Card.component";
import s from "./Services.component.module.scss";

type ServiceContentProps = {
  category: string;
  title: string;
  Cards: Array<{
    description: string;
    title: string;
    image: StaticImageData;
    button: { buttonText: string; buttonIcon: StaticImageData };
  }>;
};

function ServiceContent({ Cards, category, title }: ServiceContentProps) {
  return (
    <section className={s.container}>
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
