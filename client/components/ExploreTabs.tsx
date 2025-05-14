"use client";

import { Fragment, memo, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { TabType } from "@/types";
import { TypePageTabs } from "@/enums";

const ExploreTabs = ({ children, tabs }: { children: ReactNode; tabs: TabType[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const param = searchParams.get("q");
  const type = searchParams.get("type");

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const selectedTab = tabs[selectedTabIndex];

  useEffect(() => {
    const currentTab = tabs.find((tab) => {
      let res = pathname.endsWith(tab.link);
      if (!res && tab.link === type) res = true;
      return res;
    });
    if (currentTab) {
      const index = tabs.indexOf(currentTab);
      setSelectedTabIndex(index);
    }
  }, [param, pathname, tabs, type]);

  useEffect(() => {
    if (targetPath && pathname === targetPath) {
      setTargetPath(null);
    }
  }, [pathname, targetPath]);

  const handleTabClick = (index: number, item: TabType) => {
    const { link, type } = item;

    let newPath = "";
    switch (type) {
      case TypePageTabs.SEARCH: {
        newPath = `/search?q=${param}&type=${link}`;
        break;
      }
      case TypePageTabs.EXPLORE: {
        newPath = `/${type}/tabs/${link}`;
        break;
      }
    }

    if (pathname !== newPath) {
      setTargetPath(newPath);
      setSelectedTabIndex(index);
      router.push(newPath, { scroll: false });
    }
  };

  return (
    <Fragment>
      <div className="rounded-[10px] flex flex-col overflow-hidden h-full py-3">
        <nav className="px-1 pt-1 pb-0 border-b">
          <ul className="flex w-full list-none m-0 p-0 font-medium text-sm h-full">
            {tabs.map((item, index) => (
              <motion.li
                key={item.label}
                initial={false}
                className="h-full relative flex-1 min-w-0 cursor-pointer select-none px-4 py-2 flex items-center justify-between"
                onClick={() => handleTabClick(index, item)}
              >
                <span className="text-14-bold text-center w-full">{item.label}</span>

                {index !== tabs.length - 1 && (
                  <span className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[18px] w-[2px] bg-foreground/20"></span>
                )}

                {item === selectedTab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 right-0 h-[4px] rounded-full w-[80%] bg-blue-400"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </nav>

        <main className="container h-full">{children}</main>
      </div>
    </Fragment>
  );
};

export default memo(ExploreTabs);
