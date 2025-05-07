"use client";

import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { menuitems, NavbarType } from "@/types/NavbarType";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Tooltip from "./Tooltip";
import useViewport from "@/hooks/useViewport";
import RenderIf from "./RenderIf";
import { Viewport } from "@/enums";
import Avatar from "./Avatar";

const DELAY_DURATION = 300;

const ButtonNavBar = ({ item, active }: { item: NavbarType; active: boolean }) => {
  return (
    <Button asChild className={cn(buttonVariants({ navbar: "default" }))}>
      <div>
        <RenderIf value={active}>{item.activeIcon}</RenderIf>
        <RenderIf value={!active}>{item.icon}</RenderIf>
        <span className={`text-left text-24 ml-3 hidden 2xl:block ${active ? "font-black" : "font-semibold"}`}>
          {item.title}
        </span>
      </div>
    </Button>
  );
};

const NavBar = () => {
  const { width } = useViewport();
  const pathname = usePathname();

  return (
    <nav className="border-r-2 flex flex-col overflow-x-auto">
      <div className="2xl:pr-14 pr-0">
        <ul className="flex flex-col px-4 2xl:px-0 my-2 2xl:w-[300px]">
          {menuitems.map((item: NavbarType, index: number) => (
            <li key={index} className="my-1">
              <div className="flex items-center">
                <Link href={item.link}>
                  <RenderIf value={width <= Viewport["2XL"]}>
                    <Tooltip content={item.title} side="bottom" delayDuration={DELAY_DURATION}>
                      <ButtonNavBar item={item} active={pathname === item.link} />
                    </Tooltip>
                  </RenderIf>
                  <RenderIf value={width > Viewport["2XL"]}>
                    <ButtonNavBar item={item} active={pathname === item.link} />
                  </RenderIf>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="px-4 2xl:px-0 py-0 w-full">
          <RenderIf value={width >= Viewport["2XL"]}>
            <Button asChild size={"full"}>
              <div>
                <span className="text-24 font-black !text-background">Post</span>
              </div>
            </Button>
          </RenderIf>
          <RenderIf value={width < Viewport["2XL"]}>
            <Tooltip content={`Post`} side="bottom" delayDuration={DELAY_DURATION} classNameTrigger="w-full">
              <Button asChild size={"full"}>
                <div>
                  <CirclePlus className="size-8" />
                </div>
              </Button>
            </Tooltip>
          </RenderIf>
        </div>
      </div>
      <div className="flex-1 items-end justify-center mb-6 flex 2xl:pr-6 pr-3 2xl:pl-0 pl-3">
        <Avatar props={{ src: "https://github.com/shadcn.png" }} />
      </div>
    </nav>
  );
};

export default NavBar;
