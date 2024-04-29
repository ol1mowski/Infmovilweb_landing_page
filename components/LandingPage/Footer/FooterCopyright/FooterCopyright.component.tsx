import s from './FooterCopyright.component.module.scss';

function FooterCopyright() {
  return (
    <section className={s.copyrightWrapper}>
      <span>Copyright © 2024</span>
      <span className={s.copyrightWrapper__author}>
        Made by Oliwier Markiewicz
      </span>
    </section>
  );
}

export default FooterCopyright;
