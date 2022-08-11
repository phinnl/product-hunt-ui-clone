import { HeaderItem } from "@/models";
import clsx from "clsx";
import React from "react";
import { HeaderMenuItem } from "./header-item";

interface HeaderMenuProps {
  menu: HeaderItem[];
  className?: string;
}

export function HeaderMenu(props: HeaderMenuProps) {
  const { menu, className } = props;
  return (
    <nav className={clsx("ml-5 md:ml-8 flex items-center gap-5", className)}>
      {menu.map((item: HeaderItem, index: number) => (
        <HeaderMenuItem key={index} data={item} />
      ))}
    </nav>
  );
}
