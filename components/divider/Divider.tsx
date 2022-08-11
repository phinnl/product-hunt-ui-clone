import clsx from "clsx";
import React from "react";

interface DividerProps {
  direction: "vertical" | "horizontal";
  spacing?: number;
  size?: number;
  color?: string;
}

export function Divider(props: DividerProps) {
  const { direction, spacing = 4, size = 1, color = "#000" } = props;

  const className = direction === "vertical" ? `my-${spacing} h-[${size}px] w-full` : `mx-${spacing}  w-[${size}px] h-full`;

  return <hr className={clsx(className)} style={{ color }} />;
}
