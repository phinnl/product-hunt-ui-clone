import React from "react";

const UP_VOTE_IMAGE =
  "https://ph-static.imgix.net/upvote-burst-light-grey-v6.png?auto=compress&format=auto";

interface UpvoteButtonProps {
  upvote: number;
}

export function UpvoteButton(props: UpvoteButtonProps) {
  const { upvote } = props;
  return (
    <button
      onClick={(e) => e.preventDefault()}
      className="flex flex-col items-center px-1 pt-[7px] pb-3 border border-solid border-[#d9e1ec] rounded-[4px] mr-2 hover:border-[#fdd1be]"
    >
      <div
        className="h-[26px] w-[45px]"
        style={{
          backgroundImage: `url(${UP_VOTE_IMAGE})`,
          backgroundPosition: 0,
          backgroundRepeat: "no-repeat",
          backgroundSize: "2900%",
        }}
      ></div>
      <p className="text-[#4b587c] text-xs leading-5 font-semibold">{upvote}</p>
    </button>
  );
}
