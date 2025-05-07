"use client";

import { ReactNode } from "react";

import NavBar from "@/components/NavBar";
import { useMobile } from "@/hooks";
import RenderIf from "@/components/RenderIf";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const isMobile = useMobile();

  return (
    <main
      className={`${
        isMobile ? "flex-col justify-between" : "flex-row"
      } font-chirp text-foreground bg-background flex lg:w-[90%] md:w-[95%] w-full mx-auto h-screen`}
    >
      <RenderIf value={isMobile}>
        {children}
        <NavBar />
      </RenderIf>
      <RenderIf value={!isMobile}>
        <NavBar />
        {children}
      </RenderIf>
    </main>
  );
};

export default Layout;
