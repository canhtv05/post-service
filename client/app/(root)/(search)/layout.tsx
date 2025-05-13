"use client";

import { ReactNode } from "react";
import { useSearchParams } from "next/navigation";

import ExploreTabs from "@/components/ExploreTabs";
import SearchBar from "@/components/SearchBar";
import { tabsSearch, WIDTH_RESPONSIVE } from "@/constants";
import { Viewport } from "@/enums";
import { useSearchBar, useViewport } from "@/hooks";
import { SearchBarProps } from "@/types";

const Layout = ({ children }: { children: ReactNode }) => {
  const { width } = useViewport();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const SearchBarProps: SearchBarProps = useSearchBar(query);

  return (
    <>
      <div
        className={`${width <= WIDTH_RESPONSIVE && width >= Viewport.MD ? "px-15" : ""}
          2xl:px-20 lg:px-12 px-6 w-full`}
      >
        <div className="py-3">
          <div className="sticky z-50">
            <SearchBar {...SearchBarProps} />
          </div>

          <ExploreTabs tabs={tabsSearch}>{children}</ExploreTabs>
        </div>
      </div>
    </>
  );
};

export default Layout;
