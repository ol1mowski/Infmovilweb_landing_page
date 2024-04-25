import s from "./Services.component.module.scss";

import ServiceCard from "./Service-Card/Service-Card.component";
import { fetchElements } from "@/utils/http/http";
import { StaticImageData } from "next/image";

async function Services() {
  const fetchItems = await fetchElements("InfmovilwebCMS");

  type DataValue = {
    category: string;
    title: string;
    Cards: Array<{
      description: string;
      title: string;
      image: StaticImageData;
      button: { buttonText: string; buttonIcon: StaticImageData };
    }>;
  };

  const servicesItem = fetchItems.find((item) => item.id === "Sobre Nosotros");

  if (!servicesItem) {
    throw new Error("Could not find");
  }

  const data: DataValue = servicesItem;

  const { title, category, Cards } = data;

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

export default Services;
