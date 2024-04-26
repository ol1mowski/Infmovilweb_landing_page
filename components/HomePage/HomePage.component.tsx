import s from "./HomePage.component.module.scss";

import Card from "./Card-Component/Card.component";
import { fetchElements } from "@/utils/http/http";
import { HomePageDataType } from "@/utils/DataTypes/DataTypes";

interface DataType extends HomePageDataType {
  id: string;
}

async function HomePage() {
  const fetchItems = await fetchElements("InfmovilwebCMS");
  const homePageBarItem = fetchItems.find(
    (item) => item.id === "HomePage"
  ) as DataType;

  if (!homePageBarItem) {
    throw new Error("No se encontró ningún artículo coincidente.");
  }

  const { Cards } = homePageBarItem;

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
            description={c.description}
            title={c.title}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
