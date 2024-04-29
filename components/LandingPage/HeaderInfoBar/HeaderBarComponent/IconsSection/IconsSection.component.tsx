import Image, { type StaticImageData } from "next/image";
import s from "./IconsSection.component.module.scss";

function IconsSection({ icon }: { icon: StaticImageData }) {
  return (
    <Image
      className={s.icon}
      src={icon}
      alt="icon"
      width={30}
      height={30}
    />
  );
}

export default IconsSection;
