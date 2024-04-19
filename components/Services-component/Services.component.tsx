import Image from "next/image";
import s from "./Services.component.module.scss";

import arrow from "@/assets/icons/arrow.png";
import image from "@/assets/images/compouter_repair.jpeg";

function Services() {
  return (
    <section className={s.container}>
      <section className={s.container__header}>
        <div className={s.container__header__wrapper}>
          <span className={s.container__header__wrapper__category}>
            Sobre Nosotros
          </span>
          <h2 className={s.container__header__wrapper__title}>
            Nuestros servicios
          </h2>
        </div>
      </section>
      <section className={s.container__servicesContainer}>
        <div className={s.container__servicesContainer__wrapper}>
          <div
            className={s.container__servicesContainer__wrapper__imageWrapper}
          >
            <Image
              className={
                s.container__servicesContainer__wrapper__imageWrapper__img
              }
              src={image}
              alt="service-image"
            />
          </div>
          <div className={s.container__servicesContainer__wrapper__textWrapper}>
            <h3
              className={
                s.container__servicesContainer__wrapper__textWrapper__title
              }
            >
              reparación de ordenador
            </h3>
            <p
              className={
                s.container__servicesContainer__wrapper__textWrapper__description
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
          </div>
          <div
            className={s.container__servicesContainer__wrapper__actionSection}
          >
            <div
              className={
                s.container__servicesContainer__wrapper__actionWrapper__wrapper
              }
            >
              <span
                className={
                  s.container__servicesContainer__wrapper__actionWrapper__wrapper__text
                }
              >
                leer más
              </span>
              <Image  className={
                  s.container__servicesContainer__wrapper__actionWrapper__wrapper__icon
                } src={arrow} alt="arrow-icon" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Services;
