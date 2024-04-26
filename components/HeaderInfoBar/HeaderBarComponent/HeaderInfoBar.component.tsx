import Image, { type StaticImageData } from "next/image";
import s from "./HeaderInfoBar.component.module.scss";
import ContactSection from "./ContactSection/ContactSection.component";

type HeaderInfoBarProps = {
  companyContact: Array<{ icon: StaticImageData; content: string }>;
  facebookIcon: StaticImageData;
  linkedinIcon: StaticImageData;
  shopIcon: StaticImageData;
};

function HeaderInfoBarComponent({
  facebookIcon,
  linkedinIcon,
  shopIcon,
  companyContact,
}: HeaderInfoBarProps) {
  return (
    <section className={s.container}>
      <section className={s.container__contactSection}>
        {companyContact.map((item) => (
          <ContactSection icon={item.icon} info={item.content} />
        ))}
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
