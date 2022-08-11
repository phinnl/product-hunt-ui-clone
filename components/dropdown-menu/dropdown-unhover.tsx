import { useClickOutside } from "@/hooks";
import clsx from "clsx";
import Link from "next/link";
import { useRef, useState } from "react";

interface DropItem {
  title: string;
  href: string;
}

interface DropdownUnHoverProps {
  title: string;
  dropList: DropItem[];
}

export function DropdownUnHover(props: DropdownUnHoverProps) {
  const { title, dropList } = props;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  function show() {
    setOpen(true);
  }

  useClickOutside(ref, () => setOpen(false));

  return (
    <div className="group relative" ref={ref}>
      <a
        onClick={show}
        className="flex items-center cursor-pointer gap-1.5 text-sm leading-6 font-semibold text-[#4b587c] hover:text-[#005ef6]"
      >
        {title}
        <svg width="9" height="6" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.752.866 4.858 3.728 1.965.866a.68.68 0 0 0-.945.008.661.661 0 0 0-.009.935l3.37 3.333c.264.26.69.26.954 0l3.37-3.333A.662.662 0 0 0 8.408.684a.68.68 0 0 0-.656.182z"
            fill="#4B587C"
          ></path>
        </svg>
      </a>
      <div
        className={clsx(
          "absolute shadow-dropdown p-3 space-y-1 flex flex-col",
          {
            hidden: !open,
          }
        )}
      >
        {dropList.map((dropItem, index) => (
          <Link key={index} href={dropItem.href}>
            <a className="cursor-pointer text-sm leading-6 font-normal text-[#4b587c] hover:text-[#005ef6]">
              {dropItem.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
