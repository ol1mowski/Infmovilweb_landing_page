import s from "./AdminBar.module.scss";

function AdminBar() {
  return (
    <section className={s.container}>
      <div className={s.container__title}></div>
      <div className={s.container__buttonWrapper}>
        <button className={s.container__buttonWrapper__btn}>Leave</button>
        <button className={s.container__buttonWrapper__btn}>See Live</button>
        <button className={s.container__buttonWrapper__btn}>Save</button>
      </div>
    </section>
  );
}

export default AdminBar;
