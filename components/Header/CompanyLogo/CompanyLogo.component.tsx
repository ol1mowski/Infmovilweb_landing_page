import Image, { type StaticImageData } from "next/image";
import s from './CompanyLogo.component.module.scss';

function CompanyLogo({ logo }: { logo: StaticImageData }) {
  return (
    <section className={s.logoSection}>
      <Image src={logo
      } alt="logo of company" width={100} height={100} />
    </section>
  );
}

export default CompanyLogo;
