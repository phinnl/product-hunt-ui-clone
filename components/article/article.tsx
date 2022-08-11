import { CommentCount, ImageVideo, Tag, UpvoteButton } from "@/components";
import { Post } from "@/models";
import Link from "next/link";

interface ArticleProps {
  post: Post;
}

export function Article(props: ArticleProps) {
  const { post } = props;

  if (!post) return null;

  const {
    id,
    title,
    descriptions,
    image,
    video,
    comment,
    upvote = 0,
    tags,
  } = post;

  return (
    <Link href={`/post/${id}`}>
      <div
        className="cursor-pointer group my-8 flex space-x-5 hover:bg-[#feede6] transition-all duration-300 ease-in"
        style={{
          backgroundImage:
            "linear-gradient(12deg,#fff 50%,rgba(255,255,255,0))",
        }}
      >
        <div className="w-20 h-20">
          <ImageVideo image={image} video={video} />
        </div>
        <div className="flex-1">
          <h5 className="flex items-center gap-3 text-[#21293c] font-semibold text-base leading-6">
            {title}
            <a href="#" className="hidden group-hover:inline hover-stroke">
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="#4B587C"
                  strokeWidth="1.5"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path d="M9.6 4H4.2a2.4 2.4 0 0 0-2.4 2.4V10"></path>
                  <path d="m6.6 7 3-3-3-3m5.4 9v3H0"></path>
                </g>
              </svg>
            </a>
          </h5>
          <p className="text-base leading-6 text-[#4b587c]">{descriptions}</p>
          <div className="flex items-center mt-3 gap-5">
            <CommentCount count={comment || 0} />
            {tags?.map((tag) => (
              <Tag key={tag.id} tag={tag} />
            ))}
          </div>
        </div>
        <div className="my-auto">
          <UpvoteButton upvote={upvote} />
        </div>
      </div>
    </Link>
  );
}
