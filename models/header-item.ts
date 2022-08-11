import { MouseEventHandler } from "react";

export interface HeaderItem {
  title: string;
  descriptions?: string;
  icon?: string;
  href?: string;
  children?: HeaderItem[];
  customClass?: string;
  isButton?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}
