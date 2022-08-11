import { Divider } from "@/components";
import { STORIES } from "@/mock";
import { SideBarBox } from "./side-bar-box";

export function SideBar() {
  return (
    <aside className="ml-[72px] pl-[72px] border-l border-solid border-[#d9e1ec]">
      <div className="w-72">
        <img
          src="https://ph-files.imgix.net/624e744e-f57b-4360-8450-40a054f8843d.png?auto=format&auto=compress&codec=mozjpeg&cs=strip"
          alt=""
          className="w-full h-[200px]"
        />
        <Divider direction="vertical" color="#d9e1ec" spacing={10} />
        <SideBarBox
          href="/stories"
          title="latest stories"
          stories={STORIES}
        />
        <Divider direction="vertical" color="#d9e1ec" spacing={10} />
        <SideBarBox
          href="/jobs"
          title="JOBS"
          stories={STORIES}
        />
      </div>
    </aside>
  );
}
