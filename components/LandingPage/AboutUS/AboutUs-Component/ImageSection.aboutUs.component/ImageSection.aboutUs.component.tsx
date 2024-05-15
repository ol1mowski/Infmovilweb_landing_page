import Image, { type StaticImageData } from "next/image";
import s from './ImageSection.aboutUs.component.module.scss';

const ImageSection = ({ image }: { image: StaticImageData }) => {
  return (
    <section id="about" className={s.imageSection}>
      <div className={s.imageSection__frameOne}></div>
      <div className={s.imageSection__frameTwo}></div>
      <Image
        className={s.imageSection__img}
        width={300}
        height={290}
        src={image}
        alt="about-company-image"
      />
    </section>
  );
};

export default ImageSection;
