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
import NavBarAvatar from "./NavBarAvatar";
import { useMobile, useViewport } from "@/hooks";
import CustomScrollbar from "./CustomScrollbar";

const DELAY_DURATION: number = 300;

const ButtonNavBar = ({ item, active }: { item: NavbarType; active: boolean }) => {
  return (
    <Button asChild className={cn(buttonVariants({ navbar: "default" }))}>
      <div>
        <RenderIf value={active}>{item.activeIcon}</RenderIf>
        <RenderIf value={!active}>{item.icon}</RenderIf>
        <span className={`text-left text-20 ml-3 hidden xl:block ${active ? "font-black" : "font-semibold"}`}>
          {item.title}
        </span>
      </div>
    </Button>
  );
};

const Nav = ({ props }: { props: { isMobile: boolean; width: number; pathname: string } }) => {
  const { isMobile, pathname, width } = props;

  return (
    <div className={`${!isMobile && "h-screen"} flex flex-col justify-around`}>
      <div className="xl:pr-8 pr-0">
        <ul
          className={`flex ${
            isMobile ? "flex-row justify-around my-0" : "flex-col my-2"
          } px-1 md:px-4 xl:px-0 xl:w-[250px]`}
        >
          {menuitems.map((item: NavbarType, index: number) => (
            <li key={index} className="my-1">
              <div className="flex items-center">
                <Link href={item.link}>
                  <RenderIf value={width <= Viewport["XL"]}>
                    <RenderIf value={!isMobile}>
                      <Tooltip content={item.title} side="bottom" delayDuration={DELAY_DURATION}>
                        <ButtonNavBar item={item} active={pathname.includes(item.link)} />
                      </Tooltip>
                    </RenderIf>
                    <RenderIf value={isMobile}>
                      <ButtonNavBar item={item} active={pathname.includes(item.link)} />
                    </RenderIf>
                  </RenderIf>
                  <RenderIf value={width > Viewport["XL"]}>
                    <ButtonNavBar item={item} active={pathname.includes(item.link)} />
                  </RenderIf>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <RenderIf value={!isMobile}>
          <div className={`${width > Viewport.MD ? "w-full" : ""} md:px-3 flex justify-center xl:px-0 mb-2`}>
            <RenderIf value={width >= Viewport["XL"]}>
              <Button asChild size={"full"}>
                <div>
                  <span className="text-20 font-black !text-background">Post</span>
                </div>
              </Button>
            </RenderIf>
            <RenderIf value={width < Viewport["XL"]}>
              <Tooltip content={`Post`} side="bottom" delayDuration={DELAY_DURATION}>
                <Button asChild size={"full"}>
                  <div>
                    <CirclePlus className="size-5 md:size-6" />
                  </div>
                </Button>
              </Tooltip>
            </RenderIf>
          </div>
        </RenderIf>
      </div>
      <RenderIf value={!isMobile}>
        <div
          className={`${width > Viewport.MD && "pr-3 pl-3"} flex-1 items-end justify-center mb-6 flex xl:pr-6 xl:pl-0`}
        >
          <NavBarAvatar props={{ src: "https://github.com/shadcn.png" }} />
        </div>
      </RenderIf>
    </div>
  );
};

const NavBar = () => {
  const { width } = useViewport();
  const pathname: string = usePathname();
  const isMobile = useMobile();

  return (
    <nav className={`${isMobile && "border-t-2"}`}>
      <RenderIf value={!isMobile}>
        <CustomScrollbar height={1000}>
          <Nav props={{ isMobile, pathname, width }} />
        </CustomScrollbar>
      </RenderIf>
      <RenderIf value={isMobile}>
        <Nav props={{ isMobile, pathname, width }} />
      </RenderIf>
    </nav>
  );
};

export default NavBar;
