import Image from "next/image";
import s from "./Services.component.module.scss";

import arrow from "@/assets/icons/arrow.png";
import image from "@/assets/images/compouter_repair.jpeg";

function Services() {
  return (
    <section className={s.container}>
      <section className={s.container__header}>
        <span className={s.container__header__category}>Sobre Nosotros</span>
        <h2 className={s.container__header__title}>Nuestros servicios</h2>
      </section>
      <section className={s.container__servicesContainer}>
        <div className={s.container__servicesContainer__imageWrapper}>
          <Image
            width={270}
            height={200}
            className={s.container__servicesContainer__imageWrapper__img}
            src={image}
            alt="service-image"
          />
        </div>
        <div className={s.container__servicesContainer__textWrapper}>
          <h3 className={s.container__servicesContainer__textWrapper__title}>
            reparación de ordenador
          </h3>
          <p
            className={s.container__servicesContainer__textWrapper__description}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
        <div className={s.container__servicesContainer__actionWrapper}>
          <span className={s.container__servicesContainer__actionWrapper__text}>
            leer más
          </span>
          <Image
            className={s.container__servicesContainer__actionWrapper__icon}
            src={arrow}
            alt="arrow-icon"
          />
        </div>
      </section>
    </section>
  );
}

export default Services;
