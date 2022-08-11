import { Tag } from "@/models";
import Link from "next/link";
import React from "react";

interface TagProps {
  tag: Tag;
}

export function Tag(props: TagProps) {
  const { tag } = props;
  if (!tag) return null;
  const { id, title } = tag;
  return (
    <Link href={`/topics/${id}`}>
      <a className="text-[#4b587c] text-xs leading-5 font-normal hover:underline">{title}</a>
    </Link>
  );
}
