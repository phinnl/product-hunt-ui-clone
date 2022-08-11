import { HeaderMenu, Logo, Search, SignInModal } from "@/components";
import { logo as logoSvg, search as searchSvg } from "@/images";
import { HEADER_ITEMS } from "@/mock";
import { HeaderItem } from "@/models";
import clsx from "clsx";
import { useState } from "react";

export function Header() {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [signInOpen, setSignInOpen] = useState(false);

  const signInMenu: HeaderItem[] = [
    {
      title: "How to post a product?",
      href: "/protips",
    },
    {
      title: "Sign in",
      onClick: () => setSignInOpen(true),
    },
    {
      title: "Sign up",
      isButton: true,
      onClick: () => setSignInOpen(true),
    },
  ];

  return (
    <header className="flex justify-between items-center h-20 px-8 py-5 z-20 sticky top-0 shadow-header bg-[#fff]">
      <Logo href="/" src={logoSvg} width={40} height={40} />
      <Search
        value={search}
        focusHook={[focus, setFocus]}
        onChange={setSearch}
        placeholder={{
          focus: "Discover what you didn't know you needed",
          blur: "Search Product Hunt",
        }}
        iconProps={{
          height: 16,
          width: 16,
          src: searchSvg,
        }}
      />
      <HeaderMenu
        className={clsx("flex-1", {
          hidden: focus,
        })}
        menu={HEADER_ITEMS}
      />
      <HeaderMenu
        className={clsx({
          hidden: focus,
        })}
        menu={signInMenu}
      />
      <SignInModal open={signInOpen} setOpen={setSignInOpen} />
    </header>
  );
}
