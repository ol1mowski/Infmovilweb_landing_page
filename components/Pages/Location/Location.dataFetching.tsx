import { type LocationDataType } from "@/Types/DataTypes";
import LocationComponent from "./LocationComponent/LocationComponent.component";
import { getLoactionData } from "@/db/db_connect";

async function Location() {
  try {
    const response = (await getLoactionData()) as LocationDataType;

    const { sectionInfo, button } = response[0];

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
