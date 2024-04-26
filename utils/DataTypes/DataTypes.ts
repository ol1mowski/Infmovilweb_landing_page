import { type StaticImageData } from "next/image";

export type AboutUsDataType = {
  category: string;
  title: string;
  image: StaticImageData;
  description: string;
  button: { buttonText: string; buttonIcon: StaticImageData };
};
