import Image, { StaticImageData } from "next/image";
import s from "./Location.component.module.scss";
import LocationMap from "../LocationMap/LocationMap.component";
import ButtonComponent from "@/UI/ButtonComponent/ButtonComponent.component";

type LocationComponentProps = {
  category: string;
  description: string;
  title: string;
  companyLocation: string;
  buttonText: string;
};

function LocationComponent({
  category,
  description,
  title,
  companyLocation,
  buttonText,
}: LocationComponentProps) {
  return (
    <section id="location" className={s.container}>
      <section className={s.container__infoSection}>
        <span className={s.container__infoSection__category}>{category}</span>
        <h3 className={s.container__infoSection__title}>{title}</h3>
        <p className={s.container__infoSection__description}>{description}</p>
        <a
          href="https://www.google.com/maps/dir//INFMOVILWEB,+C.+Acorazado+Espa%C3%B1a,+1,+L2,+35660+Corralejo,+Las+Palmas,+Spain/@28.6164301,-13.9489426,12z/data=!4m18!1m8!3m7!1s0xc463502049f0711:0xf040117382faf600!2sINFMOVILWEB!8m2!3d28.737026!4d-13.869201!15sCgtpbmZtb3ZpbHdlYpIBGG1vYmlsZV9waG9uZV9yZXBhaXJfc2hvcOABAA!16s%2Fg%2F11x9ptdtk!4m8!1m0!1m5!1m1!1s0xc463502049f0711:0xf040117382faf600!2m2!1d-13.8692006!2d28.7370275!3e3?entry=ttu"
          target="_blank"
        >
          <ButtonComponent buttonText={buttonText} />
        </a>
      </section>
      <LocationMap companyLocation={companyLocation} />
    </section>
  );
}

export default LocationComponent;
