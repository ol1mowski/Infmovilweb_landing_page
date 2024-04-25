import Image from "next/image";
import s from "./HeaderInfoBar.component.module.scss";

type HeaderInfoBarProps = {
  telephone: string;
  telephoneIcon: string;
  emailIcon: string;
  email: string;
  facebookIcon: string;
  linkedinIcon: string;
  shopIcon: string;
};

function HeaderInfoBarComponent({
  telephone,
  email,
  telephoneIcon,
  emailIcon,
  facebookIcon,
  linkedinIcon,
  shopIcon,
}: HeaderInfoBarProps) {
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
            {telephone}
          </span>
        </div>
        <div className={s.container__contactSection__emailAdress}>
          <Image
            className={s.container__contactSection__emailAdress__icon}
            width={30}
            height={30}
            src={emailIcon}
            alt="mail-icon"
          />
          <span className={s.container__contactSection__emailAdress__content}>
            {email}
          </span>
        </div>
      </section>
      <section className={s.container__iconsSection}>
        <div className={s.container__iconsSection__wrapper}>
          <Image
            className={s.container__iconsSection__wrapper__icon}
            src={facebookIcon}
            alt="facebook-icon"
            width={30}
            height={30}
          />
          <Image
            className={s.container__iconsSection__wrapper__icon}
            src={shopIcon}
            alt="shop-icon"
            width={30}
            height={30}
          />
          <Image
            className={s.container__iconsSection__wrapper__icon}
            src={linkedinIcon}
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
