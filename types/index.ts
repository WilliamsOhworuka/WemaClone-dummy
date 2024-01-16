import { Dispatch, SetStateAction } from "react";

export enum Trend {
    Up = "up",
    Down = "down",
    Flat = "flat",
  }

export enum Status {
    Pending = "pending",
    Active = "active",
  }
  
export type AppContextState = {
  open: boolean;
};

export type TAppContext = {
  state: AppContextState;
  setState: Dispatch<SetStateAction<AppContextState>>;
};
  