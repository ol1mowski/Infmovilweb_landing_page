import s from "./Footer.component.module.scss";

import { type FooterDataType } from "@/Types/DataTypes";

import FooterCopyright from "../FooterCopyright/FooterCopyright.component";
import ItemsComponent from "../Items-Component/Items-Component.component";

type FooterDataTypeLocal = FooterDataType[0];

interface FooterComponentProps extends FooterDataTypeLocal {
  title: string;
  description: string;
}

function FooterComponent({
  items,
  title,
  description,
}: Omit<FooterComponentProps, "companyInfoData">) {
  return (
    <footer className={s.container}>
      <section className={s.container__itemsContainer}>
        {items.map((i) => (
          <ItemsComponent key={i.title} items={i.items} title={i.title} />
        ))}
        <div className={s.container__itemsContainer__wrapper}>
          <h4 className={s.container__itemsContainer__wrapper__title}>
            {title}
          </h4>
          <p className={s.container__itemsContainer__wrapper__companyInfo}>
            {description}
          </p>
        </div>
      </section>
      <FooterCopyright />
    </footer>
  );
}
export default FooterComponent;
