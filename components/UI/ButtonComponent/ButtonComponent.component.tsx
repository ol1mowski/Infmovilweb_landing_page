import Image from "next/image";
import s from "./ButtonComponent.component.module.scss";

import buttonIcon from "@/assets/icons/arrow.png";

function ButtonComponent({ buttonText }: { buttonText: string }) {
  return (
    <button className={s.btn}>
      <span className={s.text}>{buttonText}</span>
      <Image
        className={s.btn__img}
        src={buttonIcon}
        width={25}
        height={25}
        alt="arrow-icon"
      />
    </button>
  );
}

export default ButtonComponent;
