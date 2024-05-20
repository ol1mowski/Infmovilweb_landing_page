import Card from "./Card-Component/Card.component";

import { type HomePageDataType } from "@/Types/DataTypes";
import HomePageComponent from "./HomePageComponent/HomePageComponent.component";
import { getHomePageData } from "@/db/db_connect";

async function HomePage() {
  try {
    const fetchItems = (await getHomePageData()) as unknown as HomePageDataType;

    const { Cards } = fetchItems[0];

    if (!Cards) {
      throw new Error("Faltan algunas propiedades requeridas.");
    }

    return (
      <HomePageComponent>
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
      </HomePageComponent>
    );
  } catch (error) {
    console.error("Error fetching header bar data:", error);
    throw error;
  }
}

export default HomePage;
