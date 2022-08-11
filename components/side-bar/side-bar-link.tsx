import React from "react";
import Link from "next/link";

interface SideBarLinkProps {
  href: string;
  children: React.ReactNode;
}

export function SideBarLink(props: SideBarLinkProps) {
  const { href, children } = props;
  return (
    <Link href={href}>
      <a className="group cursor-pointer hover:text-primary text-grey text-xs leading-5 mb-6">
        {children}
      </a>
    </Link>
  );
}
