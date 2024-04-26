import { fetchElements } from "@/utils/http/http";
import { ServicesDataType } from "@/utils/DataTypes/DataTypes";
import ServiceContent from "./ServiceContent/ServiceContent.component";

interface DataType extends ServicesDataType {
  id: string;
}

async function Services() {
  const fetchItems = await fetchElements("InfmovilwebCMS");
  const servicesItem = fetchItems.find(
    (item) => item.id === "Sobre Nosotros"
  ) as DataType;

  if (!servicesItem) {
    throw new Error("No se encontró ningún artículo coincidente.");
  }

  const { sectionData, Cards } = servicesItem;

  if (!Cards || !sectionData) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const { category, title } = sectionData;

  return <ServiceContent category={category} title={title} Cards={Cards} />;
}

export default Services;
