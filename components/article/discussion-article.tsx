import { CommentCount, UpvoteButton } from "@/components";
import Link from "next/link";
import { ReactNode } from "react";

interface discussionArticleProps {}

interface DiscussionLinkProps {
  href: string;
  children: ReactNode;
}

function DiscussionLink(props: DiscussionLinkProps) {
  const { href, children } = props;
  return (
    <Link href={href}>
      <a className="flex items-center font-normal text-xs leading-5 text-[#4b587c]">
        <span className="mx-1">•</span>
        {children}
      </a>
    </Link>
  );
}

export function DiscussionArticle(props: discussionArticleProps) {
  return (
    <div className="flex">
      <div className=" space-y-5">
        <h3 className="font-bold text-2xl">
          I'm Tara Reed: CEO of Apps Without Code / Forbes 30 Under 30 / TEDx
          Speaker / NoCode Queen. AMA 🔥
        </h3>
        <p className="two-line-truncate text-base font-normal text-[#4b587c]">
          I am Tara Reed: CEO of Apps Without Code // Forbes 30 Under 30 // TEDx
          Speaker // NoCode Queen Being a pioneer in No Code app development
          inspired me to launch Apps Without Code; the very first No Code
          University where I teach others how to use technology to bring their
          app ideas to life without the need of expensive developers or coding
          knowledge. To date, Apps Without Code has helped over 85,000
          entrepreneurs, in 14 different countries, make money from apps that
          they built without code. I'll be answering questions this Wednesday 🙌
        </p>
        <div className="flex items-center mt-1 gap-2">
          <CommentCount count={0} />
          <span className="text-xs left-5 mx-1 ml-2 text-[#4b587c]">By Tara</span>
          <DiscussionLink href="/discussions/">
            Join the discussion
          </DiscussionLink>
          <DiscussionLink href="">More discussions →</DiscussionLink>
        </div>
      </div>
      <div className="ml-10">
        <UpvoteButton upvote={0} />
      </div>
    </div>
  );
}
