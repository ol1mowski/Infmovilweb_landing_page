import { FOOTER_ITEMS } from "@/data/FooterItems";
import s from "./Footer.component.module.scss";
import ItemsComponent from "./Items-Component/Items-Component.component";

function Footer() {
  return (
    <footer className={s.container}>
      <section className={s.container__itemsContainer}>
        {FOOTER_ITEMS.map((i) => (
          <ItemsComponent key={i.id} items={i.items} title={i.title} />
        ))}
        <div className={s.container__itemsContainer__wrapper}>
          <h4 className={s.container__itemsContainer__wrapper__title}>
            INFORMACIÓN DE LA TIENDA
          </h4>

          <p className={s.container__itemsContainer__wrapper__companyInfo}>
            Infmovilweb <br /> Acorazado España nº1 Local 2 <br /> 35660
            Corralejo <br /> España <br />
            Llámenos: 928 53 56 58 <br />
            Envíenos un correo <br /> electrónico: infmovilweb@gmail.com
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

export default Footer;
