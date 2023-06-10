import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
}
