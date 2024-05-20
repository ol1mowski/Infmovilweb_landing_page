import s from "./HomePage.component.module.scss";
import { type ReactNode } from "react";

function HomePageComponent({ children }: { children: ReactNode }) {
  return (
    <section id="home" className={s.container}>
      <div className={s.container__cardsWrapper}>{children}</div>
    </section>
  );
}

export default HomePageComponent;
