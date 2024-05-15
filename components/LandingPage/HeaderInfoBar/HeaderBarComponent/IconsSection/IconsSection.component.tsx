import Image, { type StaticImageData } from "next/image";
import s from "./IconsSection.component.module.scss";

function IconsSection({ icon, link }: { icon: StaticImageData; link: string }) {
  return (
    <a href={link} target="_blank">
      <Image priority className={s.icon} src={icon} alt="icon" width={30} height={30} />
    </a>
  );
}

export default IconsSection;
