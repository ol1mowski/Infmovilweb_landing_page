import s from "./Services.component.module.scss";

import ServiceCard from "./Service-Card/Service-Card.component";
import { SERVICES } from "@/data/ServicesData";

function Services() {
  return (
    <section className={s.container}>
      <section className={s.container__header}>
        <span className={s.container__header__category}>Sobre Nosotros</span>
        <h2 className={s.container__header__title}>Nuestros servicios</h2>
      </section>
      <section className={s.container__cardsWrapper}>
        {SERVICES.map((s) => (
          <ServiceCard
            key={s.id}
            image={s.image}
            description={s.description}
            title={s.title}
          />
        ))}
      </section>
    </section>
  );
}

export default Services;
