import { Article, DiscussionArticle, Divider, DropdownUnHover } from "@/components";
import { MAIN_DROP_LIST } from "@/mock";
import { FIRST_SECTION_POSTS } from "@/mock";

export function MainContent() {
  return (
    <main className="flex-1">
      <div className="flex justify-between">
        <h4 className="text-[#21293c] text-2xl leading-8 font-semibold">
          Meowy Monday
        </h4>
        <DropdownUnHover title="Featured" dropList={MAIN_DROP_LIST} />
      </div>
      <div>
        {FIRST_SECTION_POSTS.map((post) => (
          <Article key={post.id} post={post} />
        ))}
        <Divider direction="vertical" spacing={10} color="#d9e1ec" />
        <DiscussionArticle />
        <Divider direction="vertical" spacing={10} color="#d9e1ec" />
        {FIRST_SECTION_POSTS.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
