import clsx from "clsx";
import React, { ReactNode } from "react";

interface ButtonProps {
  size?: "normal" | "small";
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button(props: ButtonProps) {
  const { size, children, onClick } = props;
  const classNameAdditional = size === "small" ? "p-4" : "py-4 px-12";
  return (
    <button
      onClick={onClick}
      className={clsx(
        "h-12 flex items-center gap-3 text-base leading-6 font-semibold border border-solid border-light bg-white rounded-[3px] hover:bg-[#e8e8e8]",
        classNameAdditional
      )}
    >
      {children}
    </button>
  );
}
