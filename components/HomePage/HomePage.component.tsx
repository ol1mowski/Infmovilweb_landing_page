import s from "./HomePage.component.module.scss";

import Card from "./Card-Component/Card.component";
import { CARD_INFO } from "@/data/HomePageCard";

function HomePage() {
  return (
    <section className={s.container}>
      <div className={s.container__cardsWrapper}>
        {CARD_INFO.map((c) => (
          <Card
            key={c.id}
            logo={c.logo}
            description={c.description}
            title={c.title}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
