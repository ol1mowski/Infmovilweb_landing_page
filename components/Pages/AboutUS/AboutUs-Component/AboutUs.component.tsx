import { type StaticImageData } from "next/image";
import s from "./AboutUS.component.module.scss";

import AnimationWrapper from "@/components/Utils/AnimationWrapper/AnimationWrapper.component";
import ImageSection from "./ImageSection.aboutUs.component/ImageSection.aboutUs.component";
import ContentSection from "./ContentSection.aboutUs.component/ContentSection.aboutUs.component";

export type AboutUSComponentProps = {
  category: string;
  title: string;
  image: StaticImageData;
  description: string;
  buttonText: string;
};

function AboutUSComponent(props: AboutUSComponentProps) {
  return (
    <AnimationWrapper className={s.container}>
      <ImageSection image={props.image} />
      <ContentSection {...props} />
    </AnimationWrapper>
  );
}

export default AboutUSComponent;