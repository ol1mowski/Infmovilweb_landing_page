import Image, { StaticImageData } from "next/image";
import s from "./Location.component.module.scss";
import LocationMap from "../LocationMap/LocationMap.component";

type LocationComponentProps = {
  category: string;
  description: string;
  title: string;
  companyLocation: string;
  buttonText: string;
  buttonIcon: StaticImageData;
};

function LocationComponent({
  category,
  description,
  title,
  companyLocation,
  buttonIcon,
  buttonText,
}: LocationComponentProps) {
  return (
    <section className={s.container}>
      <section className={s.container__infoSection}>
        <span className={s.container__infoSection__category}>{category}</span>
        <h3 className={s.container__infoSection__title}>{title}</h3>
        <p className={s.container__infoSection__description}>{description}</p>
        <button className={s.container__infoSection__btn}>
          <span>{buttonText}</span>{" "}
          <Image width={25} height={25} src={buttonIcon} alt="arrow-icon" />
        </button>
      </section>
      <LocationMap companyLocation={companyLocation} />
    </section>
  );
}

export default LocationComponent;
