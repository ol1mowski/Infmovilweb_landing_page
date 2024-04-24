import ItemsComponent from "../Items-Component/Items-Component.component";
import s from "./Footer.component.module.scss";

type FooterComponentProps = {
  items: Array<{ id: string, items: string[], title: string }>;
  title: string;
  description: string;
};

function FooterComponent({ items, title, description }: FooterComponentProps) {
  return (
    <footer className={s.container}>
      <section className={s.container__itemsContainer}>
        {items.map((i) => (
          <ItemsComponent key={i.id} items={i.items} title={i.title} />
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
      <section className={s.container__copyrightWrapper}>
        <span>Copyright © 2024</span>
        <span className={s.container__copyrightWrapper__author}>
          Made by Oliwier Markiewicz
        </span>
      </section>
    </footer>
  );
}

export default FooterComponent;
