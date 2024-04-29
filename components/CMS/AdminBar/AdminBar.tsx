import Link from "next/link";
import s from "./AdminBar.module.scss";

function AdminBar() {
  return (
    <section className={s.container}>
      <div className={s.container__title}>
        <span>Change Data Panel</span>
      </div>
      <div className={s.container__buttonWrapper}>
        <button
          className={`${s.container__buttonWrapper__btn} ${s.container__buttonWrapper__btn_leave}`}
        >
          Leave
        </button>
        <Link href={"/"}>
          <button
            className={`${s.container__buttonWrapper__btn} ${s.container__buttonWrapper__btn_see}`}
          >
            See Live
          </button>
        </Link>
        <button
          className={`${s.container__buttonWrapper__btn} ${s.container__buttonWrapper__btn_save}`}
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default AdminBar;
