"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          <Image src="/imgs/logo.png" width={100} height={100} alt="logo" className="rounded-2xl" />
        </motion.div>
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
        {children}
        {/* navbar bi children de len */}
        <NavBar />
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
