import { type StaticImageData } from "next/image";

export type HeaderBarDataType = [
  {
    icons: Array<{
      id: string;
      icon: StaticImageData;
      link: string;
    }>;
    companyContact: Array<{
      id: string;
      icon: StaticImageData;
      content: string;
      link: string;
    }>;
  }
];

export type HeaderDataType = [
  {
    icons: {
      companyLogo: StaticImageData;
      hamburgerIcon: StaticImageData;
      searchIcon: StaticImageData;
    };
    items: string[];
  }
];

export type HomePageDataType = [
  {
    Cards: Array<{
      icon: StaticImageData;
      description: string;
      title: string;
      link: string;
      button: { buttonText: string; buttonIcon: StaticImageData };
    }>;
  }
];

export type AboutUsDataType = [
  {
    sectionInfo: {
      category: string;
      title: string;
      image: StaticImageData;
      description: string;
    };
    button: { buttonText: string; buttonIcon: StaticImageData };
  }
];

export type ServicesDataType = [
  {
    sectionInfo: { category: string; title: string };
    Cards: Array<{
      description: string;
      title: string;
      image: StaticImageData;
      button: { buttonText: string; buttonIcon: StaticImageData };
    }>;
  }
];

export type OpinionsDataType = [
  {
    button: { buttonText: string; buttonIcon: StaticImageData };
    sectionInfo: { category: string; score: string; title: string };
    Cards: Array<{ author: string; opinion: string; icon: StaticImageData }>;
  }
];

export type LocationDataType = [
  {
    button: { buttonText: string; buttonIcon: StaticImageData };
    sectionInfo: {
      category: string;
      description: string;
      title: string;
      companyLocation: string;
    };
  }
];

export type FooterDataType = [
  {
    companyInfoData: { title: string; description: string };
    items: Array<{
      id: string;
      items: Array<{ name: string; link: string }>;
      title: string;
    }>;
  }
];
