import Image from "next/image";
import s from "./HeaderInfoBar.component.module.scss";

import telephone from "@/assets/icons/telephone.png";
import mail from "@/assets/icons/mail.png";

import facebook from "@/assets/icons/facebook.png";
import linkedin from "@/assets/icons/linkedin.png";
import shop from "@/assets/icons/shop.png";

function HeaderInfoBar() {
  return (
    <section className={s.container}>
      <section className={s.container__contactSection}>
        <div className={s.container__contactSection__telephoneNumber}>
          <Image
            className={s.container__contactSection__telephoneNumber__icon}
            width={30}
            height={30}
            src={telephone}
            alt="telephone-icon"
          />
          <span
            className={s.container__contactSection__telephoneNumber__content}
          >
            928 53 56 58
          </span>
        </div>
        <div className={s.container__contactSection__emailAdress}>
          <Image
            className={s.container__contactSection__emailAdress__icon}
            width={30}
            height={30}
            src={mail}
            alt="mail-icon"
          />
          <span className={s.container__contactSection__emailAdress__content}>
            infmovilweb@gmail.com
          </span>
        </div>
      </section>
      <section className={s.container__iconsSection}>
        <div className={s.container__iconsSection__wrapper}>
          <Image
            className={s.container__iconsSection__wrapper__icon}
            src={facebook}
            alt=""
            width={30}
            height={30}
          />
          <Image
            className={s.container__iconsSection__wrapper__icon}
            src={shop}
            alt=""
            width={30}
            height={30}
          />
          <Image
            className={s.container__iconsSection__wrapper__icon}
            src={linkedin}
            alt=""
            width={30}
            height={30}
          />
        </div>
      </section>
    </section>
  );
}

export default HeaderInfoBar;
