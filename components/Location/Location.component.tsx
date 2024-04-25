import Image, { StaticImageData } from "next/image";
import s from "./Location.component.module.scss";
import AnimationWrapper from "@/utils/AnimationWrapper/AnimationWrapper.component";
import { fetchElements } from "@/utils/http/http";

async function Location() {
  const fetchItems = await fetchElements("InfmovilwebCMS");

  type DataValue = {
    button: { buttonText: string, buttonIcon: StaticImageData };
    category: string;
    description: string;
    title: string;
    companyLocation: string;
  };

  const locationItem = fetchItems.find((item) => item.id === "location");

  if (!locationItem) {
    throw new Error("Could not find");
  }

  const data: DataValue = locationItem;

  const { title, description, category, button, companyLocation } = data;


  return (
    <section className={s.container}>
      <section className={s.container__infoSection}>
        <span className={s.container__infoSection__category}>{category}</span>

        <h3 className={s.container__infoSection__title}>{title}</h3>

        <p className={s.container__infoSection__description}>
          { description }
        </p>

        <button className={s.container__infoSection__btn}>
          <span>{ button.buttonText }</span> <Image width={25} height={25} src={button.buttonIcon} alt="arrow-icon" />
        </button>
      </section>

      <AnimationWrapper className={s.container__mapSection}>
        <iframe
          src={companyLocation}
          width="600"
          height="450"
          className={s.container__mapSection__map}
          loading="lazy"
        ></iframe>
      </AnimationWrapper>
    </section>
  );
}

export default Location;
