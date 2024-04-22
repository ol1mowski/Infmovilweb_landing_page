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
        <h4 className={s.container__itemsContainer__wrapper__title}>
          INFORMACIÓN DE LA TIENDA
        </h4>

        <p className={s.container__itemsContainer__companyInfo}>
          Infmovilweb Acorazado España nº1 Local 235660 Corralejo España
          Llámenos: 928 53 56 58Envíenos un correo electrónico:
          infmovilweb@gmail.com
        </p>
      </section>
      <section>
        <span>Copyright © 2024</span>
        <span>Made by Oliwier Markiewicz</span>
      </section>
    </footer>
  );
}

export default Footer;
