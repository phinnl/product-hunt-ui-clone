import React from "react";

interface CommentCountProps {
  count: number;
}

export function CommentCount(props: CommentCountProps) {
  const { count } = props;
  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 13 13"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-[18px]"
      >
        <path
          d="M6.5.75c-3.31 0-6 2.362-6 5.267 0 2.905 2.69 5.266 6 5.266a6.8 6.8 0 0 0 1.036-.08l2.725 1.486a.5.5 0 0 0 .74-.44V9.46a4.893 4.893 0 0 0 1.5-3.443C12.5 3.112 9.81.75 6.5.75z"
          fill="currentColor"
        ></path>
      </svg>
      <p className="text-xs text-[#4b587c] leading-5 font-semibold">{count}</p>
    </div>
  );
}
