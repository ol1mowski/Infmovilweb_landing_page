import { type StaticImageData } from "next/image";

export type HeaderBarDataType = {
  icons: {
    facebookIcon: StaticImageData;
    linkedinIcon: StaticImageData;
    shopIcon: StaticImageData;
  };
  companyContact: Array<{ icon: StaticImageData; content: string }>;
};

export type HeaderDataType = {
  icons: {
    companyLogo: StaticImageData;
    hamburgerIcon: StaticImageData;
    searchIcon: StaticImageData;
  };
  items: string[];
};

export type HomePageDataType = {
  Cards: Array<{
    icon: StaticImageData;
    description: string;
    title: string;
    button: { buttonText: string; buttonIcon: StaticImageData };
  }>;
};

export type AboutUsDataType = {
  sectionInfo: {
    category: string;
    title: string;
    image: StaticImageData;
    description: string;
  };
  button: { buttonText: string; buttonIcon: StaticImageData };
};

export type ServicesDataType = {
  category: string;
  title: string;
  Cards: Array<{
    description: string;
    title: string;
    image: StaticImageData;
    button: { buttonText: string; buttonIcon: StaticImageData };
  }>;
};

export type OpinionsDataType = {
  button: { buttonText: string; buttonIcon: StaticImageData };
  category: string;
  score: string;
  title: string;
  Cards: Array<{ author: string; opinion: string; icon: StaticImageData }>;
};

export type LocationDataType = {
  button: { buttonText: string; buttonIcon: StaticImageData };
  category: string;
  description: string;
  title: string;
  companyLocation: string;
};

export type FooterDataType = {
  companyInfoData: { title: string; description: string };
  items: Array<{ id: string; items: string[]; title: string }>;
};
