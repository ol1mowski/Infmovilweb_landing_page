"use client";

import Link from "next/link";
import s from "./AdminBar.module.scss";
import { useContext } from "react";
import PopUpClickContext from "@/store/PopUpClickContent";

function AdminBar() {
  const { setPopUp } = useContext(PopUpClickContext);

  const showSavePopUpHandler = async () => {
    try {
      const request = await fetch("http://127.0.0.1:8080/api/save", {
        method: "POST",
        body: JSON.stringify({
          message: "Ok",
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      // Validate response status
      if (!request.ok) {
        setPopUp(true, "save", "fail");
      }

      const res = await request.json();

      if (res.message === "Ok") {
        setPopUp(true, "save", "ok");
      } else {
        setPopUp(true, "save", "fail");
      }
    } catch (err) {
      setPopUp(true, "save", "fail");
    }
  };

  const showLeavePopUpHandler = () => {
    setPopUp(true, "leave", "ok");
  };

  return (
    <section className={s.container}>
      <div className={s.container__title}>
        <span>Change Data Panel</span>
      </div>
      <div className={s.container__buttonWrapper}>
        <button
          onClick={showLeavePopUpHandler}
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
          onClick={showSavePopUpHandler}
          className={`${s.container__buttonWrapper__btn} ${s.container__buttonWrapper__btn_save}`}
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default AdminBar;
