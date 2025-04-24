import AnimationWrapper from "@/components/Utils/AnimationWrapper/AnimationWrapper.component";
import s from "./LocationMap.component.module.scss";

function LocationMap({ companyLocation }: { companyLocation: string }) {
  return (
    <AnimationWrapper className={s.mapSection}>
      <iframe
        src={companyLocation}
        width="600"
        height="450"
        className={s.mapSection__map}
        loading="lazy"
      ></iframe>
    </AnimationWrapper>
  );
}

export default LocationMap;
