import { fetchElements } from "@/utils/http/http";
import { LocationDataType } from "@/utils/DataTypes/DataTypes";
import LocationComponent from "./LocationComponent/LocationComponent.component";

interface DataType extends LocationDataType {
  id: string;
}

async function Location() {
  const fetchItems = await fetchElements("InfmovilwebCMS");
  const locationItem = fetchItems.find(
    (item) => item.id === "location"
  ) as DataType;

  if (!locationItem) {
    throw new Error("No se encontró ningún artículo coincidente.");
  }

  const { button, sectionData } = locationItem;

  if (!button || !sectionData) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const { category, title, description, companyLocation } = sectionData;
  const { buttonIcon, buttonText } = button;

  return (
    <LocationComponent
      description={description}
      category={category}
      title={title}
      companyLocation={companyLocation}
      buttonIcon={buttonIcon}
      buttonText={buttonText}
    />
  );
}

export default Location;
