"use client";

import ExploreTabs from "@/components/ExploreTabs";
import SearchBar from "@/components/SearchBar";
import { WIDTH_RESPONSIVE } from "@/constants";
import { Viewport } from "@/enums";
import { useSearchBar, useViewport } from "@/hooks";
import { SearchBarProps } from "@/types";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const { width } = useViewport();
  const SearchBarProps: SearchBarProps = useSearchBar();

  return (
    <>
      <div className={`${width <= WIDTH_RESPONSIVE && width >= Viewport.MD ? "px-24" : ""} 2xl:px-28 lg:px-12 px-6`}>
        <SearchBar {...SearchBarProps} />

        <ExploreTabs>{children}</ExploreTabs>
      </div>
    </>
  );
};

export default Layout;
