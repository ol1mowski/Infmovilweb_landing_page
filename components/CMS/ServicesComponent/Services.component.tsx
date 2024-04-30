import { fetchElements } from "@/utils/http/http";
import { ServicesDataType } from "@/utils/DataTypes/DataTypes";
import ServiceContent from "./ServiceContent/ServiceContent.component";

interface DataType extends ServicesDataType {
  id: string;
}

async function Services() {
  const fetchItems = await fetch("http://127.0.0.1:8080/api/services");

  const fetchedItems: ServicesDataType = await fetchItems.json();

  if (!fetchedItems) {
    throw new Error("Fetching failed...");
  }

  console.log(fetchedItems);

  const { sectionInfo, Cards } = fetchedItems[0];

  if (!Cards || !sectionInfo) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const { category, title } = sectionInfo;

  return <ServiceContent category={category} title={title} Cards={Cards} />;
}

export default Services;
