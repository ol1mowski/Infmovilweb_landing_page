"use client";

import s from "./PopUp.component.module.scss";

import { useContext } from "react";
import PopUpClickContext from "@/store/PopUpClickContent";
import PopUpComponent from "./PopUpComponent/PopUpComponent.component";

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
    <PopUpComponent
      open={open}
      action={action}
      statusClass={statusClass}
      leaveRedirectHandler={leaveRedirectHandler}
      closePopUpHandler={closePopUpHandler}
      info={info}
    />
  );
}

export default PopUp;
