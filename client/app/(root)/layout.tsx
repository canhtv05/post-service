"use client";

import { ReactNode } from "react";

import NavBar from "@/components/NavBar";
import { useMobile, useViewport } from "@/hooks";
import RenderIf from "@/components/RenderIf";
import Sidebar from "@/components/Sidebar";
import { Viewport } from "@/enums";

const WIDTH_RESPONSIVE = 940;

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const { width } = useViewport();
  const isMobile = useMobile();

  return (
    <div
      className={`${
        isMobile ? "flex-col justify-between" : "flex-row"
      } font-chirp text-foreground bg-background flex lg:w-[90%] md:w-[95%] w-full mx-auto h-screen`}
    >
      <RenderIf value={isMobile}>
        {children}
        <NavBar />
      </RenderIf>
      <RenderIf value={!isMobile}>
        <div className="fixed border-r-1">
          <NavBar />
        </div>
        <div className={`flex w-full ${width <= Viewport.XL ? "ml-20" : "ml-72"}`}>
          <div className={`${width >= WIDTH_RESPONSIVE ? "w-[65%]" : "w-full"}`}>
            <div className="my-2">{children}</div>
          </div>
          <RenderIf value={width >= WIDTH_RESPONSIVE}>
            <Sidebar />
          </RenderIf>
        </div>
      </RenderIf>
    </div>
  );
};

export default Layout;
