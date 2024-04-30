import { LocationDataType } from "@/utils/DataTypes/DataTypes";
import LocationComponent from "./LocationComponent/LocationComponent.component";


async function Location() {
  const fetchItems = await fetch("http://127.0.0.1:8080/api/location");

  const fetchedItems: LocationDataType = await fetchItems.json();

  if (!fetchedItems) {
    throw new Error("Fetching failed...");
  }
  
  const { sectionInfo, button } = fetchedItems[0];

  if (!button || !sectionInfo) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const { category, title, description, companyLocation } = sectionInfo;
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
