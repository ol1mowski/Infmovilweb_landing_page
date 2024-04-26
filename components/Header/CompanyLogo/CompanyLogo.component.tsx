import Image, { type StaticImageData } from "next/image";
import s from './CompanyLogo.component.module.scss';

function CompanyLogo({ logo }: { logo: StaticImageData }) {
  return (
    <section className={s.logoSection}>
      <Image src={'https://res.cloudinary.com/dbbuav0rj/image/upload/v1714151861/images/lb7gag6ho97iranf07ir.jpg'} alt="logo of company" width={100} height={100} />
    </section>
  );
}

export default CompanyLogo;
