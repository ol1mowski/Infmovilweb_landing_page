import s from "./PopUp.component.module.scss";
import close from "@/assets/icons/close_icon.png";
import Link from "next/link";
import Image from "next/image";

type PopUpComponentProps = {
  open: boolean;
  closePopUpHandler: () => void;
  action: string;
  statusClass: string;
  info: string;
  leaveRedirectHandler: () => void;
};

function PopUpComponent({
  open,
  closePopUpHandler,
  action,
  statusClass,
  info,
  leaveRedirectHandler,
}: PopUpComponentProps) {
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

export default PopUpComponent;
