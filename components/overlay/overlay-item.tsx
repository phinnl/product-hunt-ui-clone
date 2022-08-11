import { useClickOutside, useKeyPress, useLockBodyScroll } from "@/hooks";
import clsx from "clsx";
import React, { ReactNode, useRef } from "react";
import ReactDOM from "react-dom";

export interface OverlayProps {
  children: ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface LockScrollWrapperProps {
  children: ReactNode;
}

function LockScrollWrapper({ children }: LockScrollWrapperProps) {
  useLockBodyScroll();
  return <div>{children}</div>;
}

export function Overlay(props: OverlayProps) {
  const modalRoot = document.querySelector(".overlay")!;
  const { children, open, setOpen } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => setOpen(false));

  useKeyPress("Escape", undefined, () => setOpen(false));

  modalRoot.className = clsx("overlay", {
    hidden: !open,
  });

  function onClick() {
    setOpen(false);
  }

  const wrapper = (
    <div
      className={clsx("relative", {
        hidden: !open,
      })}
    >
      <button
        className="flex justify-center items-center rounded-[50%] w-10 h-10 m-7 p-[14px 143px 13px] bg-[#fff] group"
        onClick={onClick}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-[#000000cc] group-hover:fill-primary"
            d="m6 4.586 4.24-4.24a1 1 0 1 1 1.416 1.413L7.413 6l4.24 4.24a1 1 0 1 1-1.413 1.416L6 7.413l-4.24 4.24A1 1 0 1 1 .344 10.24L4.587 6 .347 1.76A1 1 0 1 1 1.757.343L6 4.587z"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        ref={ref}
        className="mt-8 p-5 w-[560px] max-w-6xl rounded-[3px] bg-[#f3f3f3] shadow-overlay mx-auto"
      >
        {open && <LockScrollWrapper>{children}</LockScrollWrapper>}
      </div>
    </div>
  ) as React.ReactElement;
  return ReactDOM.createPortal(wrapper, modalRoot);
}
