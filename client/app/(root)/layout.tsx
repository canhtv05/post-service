"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

import NavBar from "@/components/NavBar";
import { useMobile, useViewport } from "@/hooks";
import RenderIf from "@/components/RenderIf";
import Sidebar from "@/components/Sidebar";
import { Viewport } from "@/enums";
import { WIDTH_RESPONSIVE } from "@/constants";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const { width } = useViewport();
  const isMobile = useMobile();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen font-chirp text-lg">
        <div className="animate-rotate">
          <Image src="/imgs/logo.png" width={100} height={100} alt="logo" className="rounded-2xl" priority />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${
        isMobile ? "flex-col justify-between" : "flex-row"
      } font-chirp text-foreground bg-background flex md:w-[95%] w-full mx-auto h-screen relative`}
    >
      <RenderIf value={isMobile}>
        <div className="relative w-full h-full">
          <div className="absolute z-10 w-full">{children}</div>
          <div className="absolute h-[52px] z-20 bottom-0 bg-background w-full">
            <NavBar />
          </div>
        </div>
      </RenderIf>
      <RenderIf value={!isMobile}>
        <div className="fixed">
          <NavBar />
        </div>
        <div className={`flex w-full ${width <= Viewport.XL ? "ml-20" : "ml-72"}`}>
          <div className={`${width >= 1400 ? "w-[68%]" : width > WIDTH_RESPONSIVE ? "w-[65%]" : "w-full"}`}>
            <div className="my-2">{children}</div>
          </div>
          <RenderIf value={width > WIDTH_RESPONSIVE}>
            <Sidebar />
          </RenderIf>
        </div>
      </RenderIf>
    </div>
  );
};

export default Layout;
