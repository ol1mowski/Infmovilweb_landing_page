import Image from "next/image";
import s from './AboutUS.component.module.scss';

function AboutUS() {
  return (
    <section className={s.container}>
      <section className={s.container__imageSection}>
        <div className={s.container__imageSection__frameOne}></div>
        <div className={s.container__imageSection__frameTwo}></div>
        <Image className={s.container__imageSection__img} src={""} alt="" />
      </section>
      <section className={s.container__contentSection}>
        <div className={s.container__contentSection__infoWrapper}>
          <span className={s.container__contentSection__infoWrapper__category}></span>
          <h3 className={s.container__contentSection__infoWrapper__title}></h3>
          <p className={s.container__contentSection__infoWrapper__description}></p>
        </div>
        <div className={s.container__contentSection__buttonSection}>
          <button className={s.container__contentSection__buttonSection__btn}>
            <span className={s.container__contentSection__buttonSection__text}></span>
            <Image className={s.container__contentSection__buttonSection__btn__img} src={""} alt="" />
          </button>
        </div>
      </section>
    </section>
  );
}

export default AboutUS;
