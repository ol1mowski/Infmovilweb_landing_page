'use client'

import Image, { type StaticImageData } from "next/image";
import s from "./ContactSection.component.module.scss";
import { useState } from "react";

type ContactSectionProps = {
  icon: StaticImageData;
  info: string;
};

function ContactSection({ icon, info }: ContactSectionProps) {
  const [value, setvalue] = useState<string>(info);

  return (
    <div className={s.contactWrapper}>
      <Image
        className={s.contactWrapper__icon}
        width={30}
        height={30}
        src={icon}
        alt="telephone-icon"
      />
      <input
        type="text"
        className={s.contactWrapper__content}
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
    </div>
  );
}

export default ContactSection;
