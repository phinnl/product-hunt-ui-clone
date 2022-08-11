import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  src: string;
  width: number | string;
  height: number | string;
  href: string;
}

export function Logo(props: LogoProps) {
  const { href, src, width, height } = props;
  return (
    <Link href={href}>
      <a>
        <Image src={src} width={width} height={height} layout="fixed" />
      </a>
    </Link>
  );
}
