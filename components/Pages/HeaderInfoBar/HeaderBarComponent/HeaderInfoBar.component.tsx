import s from "./HeaderInfoBar.component.module.scss";

import ContactSection from "./ContactSection/ContactSection.component";
import { type HeaderBarDataType } from "@/Types/DataTypes";
import IconsSection from "./IconsSection/IconsSection.component";

function HeaderInfoBarComponent({ companyContact, icons }: HeaderBarDataType[0]) {
  return (
    <section className={s.container}>
      <section className={s.container__contactSection}>
        {companyContact.map((item) => (
          <ContactSection key={item.id} icon={item.icon} info={item.content} link={item.link}/>
        ))}
      </section>
      <section className={s.container__iconsSection}>
        <div className={s.container__iconsSection__wrapper}>
          {icons.map((item) => (
            <IconsSection key={item.id} icon={item.icon} link={item.link}/>
          ))}
        </div>
      </section>
    </section>
  );
}

export default HeaderInfoBarComponent;
