import { HeaderItem } from "@/models";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface DropdownMenuProps {
  items: HeaderItem[]
}

export function DropdownMenu(props: DropdownMenuProps) {
  const { items } = props;
  return (
    <div className="absolute top-[17px] hidden group-hover:block">
      <div className="mt-[23px] dropdown-menu">
        {items.map((item, index) => (
          <Link key={index} href={item.href!}>
            <a>
              <div className={clsx("flex gap-3 px-4 py-2 w-96", item.customClass)}>
                {item.icon && <div className="w-8">
                  <img src={item.icon} className="w-8 h-8" alt="" />
                </div>}
                <div className="flex flex-1 flex-col text-[#4b587c] hover:text-[#21293c]">
                  <p className="text-base leading-6 font-semibold">{item.title}</p>
                  <p className="text-xs left-5">{item.descriptions}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
