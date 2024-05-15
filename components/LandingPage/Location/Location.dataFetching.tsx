import { type LocationDataType } from "@/utils/DataTypes/DataTypes";
import LocationComponent from "./LocationComponent/LocationComponent.component";

async function Location() {
  try {
    const response = await fetch("http://127.0.0.1:8080/api/location", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Fetching failed with status: ${response.status}`);
    }

    const fetchedItems: LocationDataType = await response.json();

    if (!fetchedItems.length) {
      throw new Error("No location data found.");
    }

    const { sectionInfo, button } = fetchedItems[0];

    if (!button || !sectionInfo) {
      throw new Error("Missing required properties.");
    }

    const { category, title, description, companyLocation } = sectionInfo;
    const { buttonText } = button;

    return (
      <LocationComponent
        description={description}
        category={category}
        title={title}
        companyLocation={companyLocation}
        buttonText={buttonText}
      />
    );
  } catch (error) {
    console.error("Error fetching header bar data:", error);
    throw error;
  }
}

export default Location;
