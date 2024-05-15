import { type ServicesDataType } from "@/utils/DataTypes/DataTypes";
import ServiceContent from "./ServiceContent/ServiceContent.component";

async function Services() {
  try {
    const response = await fetch("http://127.0.0.1:8080/api/services");
    const fetchedItems: ServicesDataType = await response.json();

    if (!fetchedItems || !fetchedItems.length) {
      throw new Error("No data fetched.");
    }

    const { sectionInfo, Cards } = fetchedItems[0];

    if (!Cards || !sectionInfo) {
      throw new Error("Missing required properties.");
    }

    return <ServiceContent sectionInfo={sectionInfo} Cards={Cards} />;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
}

export default Services;
