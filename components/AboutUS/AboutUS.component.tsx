import { fetchElements } from "@/utils/http/http";
import AboutUSComponent from "./AboutUs-Component/AboutUs.component";

async function AboutUS() {

  const items = await fetchElements("InfmovilwebCMS");

  type DataValue = {
    id: string;
    category: string;
    title: string;
    description: string;
    button: { buttonText: string };
  };

  const aboutUsItem = items.find((item) => item.id === "AboutUs");

  if (!aboutUsItem) {
    throw new Error("Could not find");
  }

  const data: DataValue = aboutUsItem;

  const { category, title, description, button } = data;

  return (
    <AboutUSComponent
      category={category}
      title={title}
      description={description}
      buttonText={button.buttonText}
    />
  );
}

export default AboutUS;
