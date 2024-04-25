import Image from "next/image";
import s from "./HeaderInfoBar.component.module.scss";

import telephoneIcon from "@/assets/icons/telephone.png";
import mailIcon from "@/assets/icons/mail.png";

import facebook from "@/assets/icons/facebook.png";
import linkedin from "@/assets/icons/linkedin.png";
import shop from "@/assets/icons/shop.png";

type HeaderInfoBarProps = {
  telephone: string,
  email: string,
}

function HeaderInfoBarComponent({ telephone, email }: HeaderInfoBarProps) {


  return (
    <section className={s.container}>
      <section className={s.container__contactSection}>
        <div className={s.container__contactSection__telephoneNumber}>
          <Image
            className={s.container__contactSection__telephoneNumber__icon}
            width={30}
            height={30}
            src={telephoneIcon}
            alt="telephone-icon"
          />
          <span
            className={s.container__contactSection__telephoneNumber__content}
          >
            { telephone }
          </span>
        </div>
        <div className={s.container__contactSection__emailAdress}>
          <Image
            className={s.container__contactSection__emailAdress__icon}
            width={30}
            height={30}
            src={mailIcon}
            alt="mail-icon"
          />
          <span className={s.container__contactSection__emailAdress__content}>
            { email }
          </span>
        </div>
      </section>
      <section className={s.container__iconsSection}>
        <div className={s.container__iconsSection__wrapper}>
          <Image
            className={s.container__iconsSection__wrapper__icon}
            src={facebook}
            alt="facebook-icon"
            width={30}
            height={30}
          />
          <Image
            className={s.container__iconsSection__wrapper__icon}
            src={shop}
            alt="shop-icon"
            width={30}
            height={30}
          />
          <Image
            className={s.container__iconsSection__wrapper__icon}
            src={linkedin}
            alt="linkedin-icon"
            width={30}
            height={30}
          />
        </div>
      </section>
    </section>
  );
}

export default HeaderInfoBarComponent;
