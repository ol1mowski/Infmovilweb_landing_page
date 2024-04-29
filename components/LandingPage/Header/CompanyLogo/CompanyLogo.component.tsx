import Image, { type StaticImageData } from "next/image";
import s from './CompanyLogo.component.module.scss';

import logoI from '@/assets/images/logo.jpeg'

function CompanyLogo({ logo }: { logo: StaticImageData }) {
  return (
    <section className={s.logoSection}>
      <Image src={logoI
      } alt="logo of company" width={100} height={100} />
    </section>
  );
}

export default CompanyLogo;
