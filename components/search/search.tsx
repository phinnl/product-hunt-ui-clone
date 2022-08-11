import { Divider } from "@/components";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useMemo } from "react";

interface IconProps {
  src: string;
  width: number | string;
  height: number | string;
}

interface PlaceHolderToggle {
  focus: string;
  blur: string;
}

interface SearchProps {
  value: string;
  focusHook: [boolean, Dispatch<SetStateAction<boolean>>];
  onChange: (value: string) => void;
  placeholder: PlaceHolderToggle | string;
  iconProps: IconProps;
}

export function Search(props: SearchProps) {
  const { focusHook, value, onChange, iconProps, placeholder } = props;
  const [focus, setFocus] = focusHook;

  const placeHolderText = useMemo(() => {
    if (typeof placeholder === "string") return placeholder;
    return focus ? placeholder.focus : placeholder.blur;
  }, [focus, placeholder]);

  function onSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value || "";
    onChange(value);
  }

  return (
    <div
      className={clsx("relative ml-8", {
        "flex-1": focus,
      })}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div className="flex items-center absolute top-3 left-3">
        <Image {...iconProps} layout="fixed" />
      </div>
      <input
        className={clsx("input-search w-full")}
        spellCheck={false}
        value={value || ""}
        onChange={onSearch}
        type="text"
        placeholder={placeHolderText}
      />
      <div
        className={clsx(
          "absolute top-11 max-h-96 w-full rounded-md] bg-[#fff] shadow-dropdown p-5",
          {
            hidden: !(focus && value),
          }
        )}
      >
        <div>
          <Link href={`/products?q=${value}`}>
            <a className="hover:underline font-semibold text-sm leading-6 text-[#21293c]">
              PRODUCTS →
            </a>
          </Link>
          <div className="my-3"></div>
        </div>
        <Divider direction="vertical" color="#d9e1ec" spacing={3} />
        <Link href={`/search?q=${value}`}>
          <a className="hover:underline font-semibold text-sm leading-6 text-[#21293c]">
            View all results
          </a>
        </Link>
      </div>
    </div>
  );
}
