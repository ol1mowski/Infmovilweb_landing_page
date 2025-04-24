import ScrollLink from "@/components/Utils/ScrollLink/ScrollLink.component";
import s from "./ContentSection.aboutUs.component.module.scss";
import ButtonComponent from "@/components/UI/ButtonComponent/ButtonComponent.component";
import { type AboutUSComponentProps } from "../AboutUs.component";

const ContentSection = ({
  category,
  title,
  description,
  buttonText,
}: Omit<AboutUSComponentProps, "image">) => {
  return (
    <section className={s.contentSection}>
      <div className={s.contentSection__infoWrapper}>
        <span className={s.contentSection__infoWrapper__category}>
          {category}
        </span>
        <h3 className={s.contentSection__infoWrapper__title}>
          {title}
        </h3>
        <p className={s.contentSection__infoWrapper__description}>
          {description}
        </p>
      </div>
      <div className={s.contentSection__buttonSection}>
        <ScrollLink link="#services">
          <ButtonComponent buttonText={buttonText} />
        </ScrollLink>
      </div>
    </section>
  );
};

export default ContentSection;
