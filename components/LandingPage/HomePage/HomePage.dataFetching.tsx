import Card from "./Card-Component/Card.component";

import { type HomePageDataType } from "@/utils/DataTypes/DataTypes";
import HomePageComponent from "./HomePageComponent/HomePageComponent.component";

async function HomePage() {
  try {
    const fetchItems = await fetch("http://127.0.0.1:8080/api/homepage", {
      cache: "no-store",
    });

    if (!fetchItems.ok) {
      throw new Error(`Fetching failed with status: ${fetchItems.status}`);
    }

    const fetchedItems: HomePageDataType = await fetchItems.json();

    if (!fetchedItems) {
      throw new Error("Fetching failed...");
    }

    const { Cards } = fetchedItems[0];

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
