"use client";

import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { menuitems, NavbarType } from "@/types/NavbarType";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Tooltip from "./Tooltip";
import RenderIf from "./RenderIf";
import { Viewport } from "@/enums";
import Avatar from "./Avatar";
import { useMobile, useViewport } from "@/hooks";

const DELAY_DURATION: number = 300;

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
  const pathname: string = usePathname();
  const isMobile = useMobile();

  return (
    <nav className={`${!isMobile ? "border-r-2" : "border-t-2"} flex flex-col overflow-x-auto`}>
      <div className="2xl:pr-14 pr-0">
        <ul
          className={`flex ${
            isMobile ? "flex-row justify-around my-0" : "flex-col my-2"
          } px-1 md:px-4 2xl:px-0 2xl:w-[300px]`}
        >
          {menuitems.map((item: NavbarType, index: number) => (
            <li key={index} className="my-1">
              <div className="flex items-center">
                <Link href={item.link}>
                  <RenderIf value={width <= Viewport["2XL"]}>
                    <RenderIf value={!isMobile}>
                      <Tooltip content={item.title} side="bottom" delayDuration={DELAY_DURATION}>
                        <ButtonNavBar item={item} active={pathname === item.link} />
                      </Tooltip>
                    </RenderIf>
                    <RenderIf value={isMobile}>
                      <ButtonNavBar item={item} active={pathname === item.link} />
                    </RenderIf>
                  </RenderIf>
                  <RenderIf value={width > Viewport["2XL"]}>
                    <ButtonNavBar item={item} active={pathname === item.link} />
                  </RenderIf>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <RenderIf value={!isMobile}>
          <div className={`${width > Viewport.MD ? "w-full" : ""} md:px-3 flex justify-center 2xl:px-0`}>
            <RenderIf value={width >= Viewport["2XL"]}>
              <Button asChild size={"full"}>
                <div>
                  <span className="text-24 font-black !text-background">Post</span>
                </div>
              </Button>
            </RenderIf>
            <RenderIf value={width < Viewport["2XL"]}>
              <Tooltip content={`Post`} side="bottom" delayDuration={DELAY_DURATION}>
                <Button asChild size={"full"}>
                  <div>
                    <CirclePlus className="size-6 md:size-8" />
                  </div>
                </Button>
              </Tooltip>
            </RenderIf>
          </div>
        </RenderIf>
      </div>
      <RenderIf value={!isMobile}>
        <div
          className={`${
            width > Viewport.MD && "pr-3 pl-3"
          } flex-1 items-end justify-center mb-6 flex 2xl:pr-6 2xl:pl-0 `}
        >
          <Avatar props={{ src: "https://github.com/shadcn.png" }} />
        </div>
      </RenderIf>
    </nav>
  );
};

export default NavBar;
