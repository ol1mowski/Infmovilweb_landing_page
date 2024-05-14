import s from "./HomePage.component.module.scss";

import Card from "./Card-Component/Card.component";

import { HomePageDataType } from "@/utils/DataTypes/DataTypes";

async function HomePage() {
  const fetchItems = await fetch("http://127.0.0.1:8080/api/homepage", {
    cache: "no-store",
  });

  const fetchedItems: HomePageDataType = await fetchItems.json();

  if (!fetchedItems) {
    throw new Error("Fetching failed...");
  }

  const { Cards } = fetchedItems[0];

  if (!Cards) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  return (
    <section className={s.container}>
      <div className={s.container__cardsWrapper}>
        {Cards.map((c) => (
          <Card
            buttonIcon={c.button.buttonIcon}
            buttonText={c.button.buttonText}
            key={c.title}
            logo={c.icon}
            link={c.link}
            description={c.description}
            title={c.title}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
