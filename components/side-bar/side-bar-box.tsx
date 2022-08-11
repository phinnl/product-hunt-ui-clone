import { ImageVideo } from "@/components";
import { Stories as Story } from "@/models"
import Link from "next/link";
import { SideBarLink } from "./side-bar-link";

interface SideBarBoxProps {
  title: string;
  href: string;
  stories: Story[];
}

interface SideBarStoryProps {
  story: Story;
}

function SideBarStory(props: SideBarStoryProps) {
  const { story } = props;
  if (!story) return null;

  const { title, image, timeRead, video, href } = story;
  return (
    <div className="flex">
      <div>
        <Link href={href}>
          <a className="text-sm leading-6 text-[#21293c] font-semibold">{title}</a>
        </Link>
        <p className="text-xs leading-5 text-[#4b587c] font-normal">{timeRead}</p>
      </div>
      <div>
        <Link href={href}>
          <a className="block w-[72px]">
            <ImageVideo image={image} video={video}/>
          </a>
        </Link>
      </div>
    </div>
  );
}

export function SideBarBox(props: SideBarBoxProps) {
  const { title, href, stories } = props;
  return (
    <div className="space-y-6">
      <SideBarLink href={href}>
        {title.toUpperCase()}
        <span className="after:content-['\2192'] transition-all ease-in-out group-hover:pl-1"></span>
      </SideBarLink>
      <div className="space-y-6">
        {stories.map((story) => (
          <SideBarStory key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}
