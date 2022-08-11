import { DropdownMenu } from "@/components";
import { HeaderItem } from "@/models";
import clsx from "clsx";
import Link from "next/link";

interface HeaderMenuItemProps {
  data: HeaderItem;
}

export function HeaderMenuItem(props: HeaderMenuItemProps) {
  const { data } = props;

  if (!data) return null;

  const { title, href, children, customClass, isButton, onClick } = data;

  const className = clsx("leading-6 cursor-pointer", customClass, {
    "hover:text-primary text-grey text-base": !isButton,
    btn: isButton,
  });

  const child = isButton ? (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  ) : (
    <a className={className} onClick={onClick}>
      {title}
    </a>
  );

  return (
    <div className="group relative">
      {href ? <Link href={href}>{child}</Link> : child}
      {children && <DropdownMenu items={children} />}
    </div>
  );
}
