import AboutUSComponent from "./AboutUs-Component/AboutUs.component";
import { type AboutUsDataType } from "@/utils/DataTypes/DataTypes";

async function fetchAboutUsData() {
  const response = await fetch("http://127.0.0.1:8080/api/aboutus", {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Fetching failed with status: ${response.status}`);
  }

  return response.json();
}

async function AboutUS() {
  try {
    const fetchedItems = await fetchAboutUsData() as AboutUsDataType;

    if (!fetchedItems.length) {
      throw new Error("No data received from the server.");
    }

    const { sectionInfo, button } = fetchedItems[0];

    if (!sectionInfo || !button) {
      throw new Error("Missing required properties.");
    }

    const { image, category, description, title } = sectionInfo;

    return (
      <AboutUSComponent
        image={image}
        category={category}
        title={title}
        description={description}
        buttonText={button.buttonText}
      />
    );
  } catch (error) {
    console.error("Error fetching About Us data:", error);
    return <p>Error loading About Us section.</p>;
  }
}

export default AboutUS;