import s from "./HomePage.component.module.scss";

import Card from "./Card-Component/Card.component";
import { fetchElements } from "@/utils/http/http";
import { type StaticImageData } from "next/image";

async function HomePage() {
  const fetchItems = await fetchElements("InfmovilwebCMS");

  type DataValue = {
    Cards: Array<{ icon: string; description: string, title: string }>;
  };

  const homePageItem = fetchItems.find((item) => item.id === "HomePage");

  if (!homePageItem) {
    throw new Error("Could not find");
  }

  const data: DataValue = homePageItem;

  const { Cards } = data;
  

  return (
    <section className={s.container}>
      <div className={s.container__cardsWrapper}>
        {Cards.map((c) => (
          <Card
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
