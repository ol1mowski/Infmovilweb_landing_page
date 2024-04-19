import Image from "next/image";
import s from "./Location.component.module.scss";
import arrow from "@/assets/icons/arrow.png";

function Location() {
  return (
    <section className={s.container}>
      <section className={s.container__infoSection}>
        <span className={s.container__infoSection__category}>ubicación</span>

        <h3 className={s.container__infoSection__title}>Encuéntranos</h3>

        <p className={s.container__infoSection__description}>
          entra en nuestra web y solucionaremos tus problemas
        </p>

        <button className={s.container__infoSection__btn}>
          <span>navegar</span> <Image src={arrow} alt="arrow-icon" />
        </button>
      </section>
      <section className={s.container__mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4149325535122!2d-13.87177592481543!3d28.737025975607832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc463502049f0711%3A0xf040117382faf600!2sINFMOVILWEB!5e0!3m2!1sen!2ses!4v1713553258330!5m2!1sen!2ses"
          width="600"
          height="450"
          className={s.container__mapSection__map}
          loading="lazy"
        ></iframe>
      </section>
    </section>
  );
}

export default Location;
