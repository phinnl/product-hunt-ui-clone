import { HeaderItem } from "@/models";

export const HEADER_ITEMS: HeaderItem[] = [
  {
    title: "Product",
    href: "/",
    children: [
      {
        title: "Topics",
        descriptions: "Browser products through topics",
        href: "/topics",
        icon: "https://ph-static.imgix.net/nav-topics.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=max&dpr=1",
      },
      {
        title: "Upcoming products",
        descriptions: "See watch makers are currently building",
        href: "/upcoming",
        icon: "https://ph-static.imgix.net/nav-upcoming-products.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=max&dpr=1",
      },
      {
        title: "Collections",
        descriptions: "Products curated by the community",
        href: "/collections",
        icon: "https://ph-static.imgix.net/nav-collections.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=max&dpr=1",
      },
      {
        title: "Time travels",
        descriptions: "Most loved products by the community",
        href: "/time-travel",
        icon: "https://ph-static.imgix.net/nav-time-travel.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=max&dpr=1",
      },
      {
        title: "Newsletter",
        descriptions: "The best of Product Hunt, everyday",
        href: "/newsletter",
        icon: "https://ph-static.imgix.net/header-newsletter.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=max&dpr=1",
      },
      {
        title: "Web3",
        descriptions: "Keep up to date with the latest in web3",
        href: "/web3",
        icon: "https://ph-static.imgix.net/web3/nav-web3.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=32&h=32&fit=max&dpr=1",
      },
      {
        title: "Launching Soon?",
        descriptions: "Read our pro tips to prepare your hunt",
        href: "/protips",
        customClass: "bg-[#f5f8ff]"
      },
    ],
  },
  {
    title: "Community",
    href: "/discussions",
  },
  {
    title: "Tools",
    href: "/founder-club",
  },
  {
    title: "Jobs",
    href: "/jobs",
  },
  {
    title: "About",
    href: "/about",
  },
];
