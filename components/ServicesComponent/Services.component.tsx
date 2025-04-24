import { type ServicesDataType } from "@/Types/DataTypes";
import ServiceContent from "./ServiceContent/ServiceContent.component";
import { getServicesData } from "@/db/db_connect";

async function Services() {
  try {
    const response = (await getServicesData()) as unknown as ServicesDataType;

    const { sectionInfo, Cards } = response[0];

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
