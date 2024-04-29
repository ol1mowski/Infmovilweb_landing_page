"use client";

import { createContext } from "react";

type PopUpClickContextType = {
  popUp: { open: boolean; action: string; status: string };
  setPopUp: (click: boolean, action: string, status: string) => void;
};

const PopUpClickContext = createContext<PopUpClickContextType>({
  popUp: { open: false, action: 'leave', status: 'ok' },
  setPopUp: (click: boolean, action: string, status: string) => {},
});

export default PopUpClickContext;
