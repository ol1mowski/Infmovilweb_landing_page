"use client";

import Image from "next/image";
import s from "./PopUp.component.module.scss";

import close from "@/assets/icons/close_icon.png";
import { useContext } from "react";
import PopUpClickContext from "@/store/PopUpClickContent";
import Link from "next/link";

function PopUp() {
  let statusClass: string = "";
  let info: string = "";

  const { popUp, setPopUp } = useContext(PopUpClickContext);

  const { status } = popUp;

  if (status === "ok") {
    statusClass = s.container__content__title_success;
    info = "Data was success saved !";
  } else {
    statusClass = s.container__content__title_fail;
    info = "Something went wront ! Please try again !";
  }

  const closePopUpHandler = () => {
    setPopUp(false, "", "");
  };

  const leaveRedirectHandler = () => {
    setPopUp(false, "", "");
  };

  const { open, action } = popUp;

  return (
    <>
      {open ? (
        <section className={s.container}>
          <section className={s.container__close}>
            <div
              className={s.container__close__wrapper}
              onClick={closePopUpHandler}
            >
              <Image width={20} height={20} src={close} alt="close-icon" />
            </div>
          </section>
          <section className={s.container__content}>
            {action === "leave" ? (
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
            {action === "leave" ? (
              <>
                <button
                  onClick={closePopUpHandler}
                  className={s.container__buttons__btn_cancel}
                >
                  Cancel
                </button>
                <Link href={"/"}>
                  <button
                    onClick={leaveRedirectHandler}
                    className={s.container__buttons__btn_close}
                  >
                    Leave
                  </button>
                </Link>
              </>
            ) : null}
          </section>
        </section>
      ) : null}
    </>
  );
}

export default PopUp;
