import Image, { type StaticImageData } from "next/image";
import s from "./ContactSection.component.module.scss";

type ContactSectionProps = {
  icon: StaticImageData;
  info: string;
  link: string;
};

function ContactSection({ icon, info, link }: ContactSectionProps) {
  return (
    <a href={link} target="_blank">
      <div className={s.contactWrapper}>
        <Image
          className={s.contactWrapper__icon}
          width={30}
          height={30}
          src={icon}
          alt="telephone-icon"
        />
        <span className={s.contactWrapper__content}>{info}</span>
      </div>
    </a>
  );
}

export default ContactSection;
