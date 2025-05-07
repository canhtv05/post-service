import {
  BellFillIcon,
  BellIcon,
  HomeFillIcon,
  HomeIcon,
  MailFillIcon,
  MailIcon,
  SearchFillIcon,
  SearchIcon,
  UserFillIcon,
  UserIcon,
} from "@/assets/icons";
import { ReactNode } from "react";

export type NavbarType = {
  title: string;
  link: string;
  icon: ReactNode;
  activeIcon: ReactNode;
};

const className = `size-8 stroke-2 text-foreground`;

export const menuitems = [
  {
    title: "Home",
    link: "/home",
    icon: <HomeIcon className={`${className}`} />,
    activeIcon: <HomeFillIcon className={className} />,
  },
  {
    title: "Explore",
    link: "/explore",
    icon: <SearchIcon className={`${className}`} />,
    activeIcon: <SearchFillIcon className={className} />,
  },
  {
    title: "Notifications",
    link: "/notifications",
    icon: <BellIcon className={`${className}`} />,
    activeIcon: <BellFillIcon className={className} />,
  },
  {
    title: "Messages",
    link: "/messages",
    icon: <MailIcon className={`${className}`} />,
    activeIcon: <MailFillIcon className={className} />,
  },
  {
    title: "Profile",
    link: "/profile",
    icon: <UserIcon className={`${className}`} />,
    activeIcon: <UserFillIcon className={className} />,
  },
];
