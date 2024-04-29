import Image from "next/image";
import s from "./PopUp.component.module.scss";

import close from "@/assets/icons/close_icon.png";

function PopUp({
  popUpType,
  saveStatus,
}: {
  popUpType: "leave" | "save";
  saveStatus?: string;
}) {
  let statusClass: string = "";
  let info: string = "";

  if (saveStatus === "ok") {
    statusClass = s.container__content__title_success;
    info = "Data was success saved !";
  } else {
    statusClass = s.container__content__title_fail;
    info = "Something went wront ! Please try again !";
  }

  return (
    <section className={s.container}>
      <section className={s.container__close}>
        <div className={s.container__close__wrapper}>
          <Image width={20} height={20} src={close} alt="close-icon" />
        </div>
      </section>
      <section className={s.container__content}>
        {popUpType === "leave" ? (
          <>
            <h2 className={s.container__content__title}>Are You Sure ?</h2>
            <p className={s.container__content__description}>
              Are you sure you want to leave this admin panel
            </p>
          </>
        ) : (
          <h2 className={statusClass}>{info}</h2>
        )}
      </section>
      <section className={s.container__buttons}>
        {popUpType === "leave" ? (
          <>
            <button className={s.container__buttons__btn_cancel}>Cancel</button>
            <button className={s.container__buttons__btn_close}>Leave</button>
          </>
        ) : null}
      </section>
    </section>
  );
}

export default PopUp;
