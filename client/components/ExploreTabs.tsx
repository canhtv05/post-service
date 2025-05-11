"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const allIngredients = [
  { label: "Users", link: "users" },
  { label: "Trending", link: "trending" },
  { label: "News", link: "news" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];

const ExploreTabs = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const selectedTab = tabs[selectedTabIndex];

  useEffect(() => {
    const currentTab = tabs.find((tab) => pathname.endsWith(tab.link));
    if (currentTab) {
      const index = tabs.indexOf(currentTab);
      setSelectedTabIndex(index);
    }
  }, [pathname]);

  useEffect(() => {
    if (targetPath && pathname === targetPath) {
      setIsLoading(false);
      setTargetPath(null);
    }
  }, [pathname, targetPath]);

  const handleTabClick = (index: number, link: string) => {
    const newPath = `/explore/tabs/${link}`;
    if (pathname !== newPath) {
      setIsLoading(true);
      setTargetPath(newPath);
      setSelectedTabIndex(index);
      router.push(newPath, { scroll: false });
    }
  };

  return (
    <Fragment>
      <div className="rounded-[10px] flex flex-col overflow-hidden mt-5">
        <nav className="px-1 pt-1 pb-0 border-b">
          <ul className="flex w-full list-none m-0 p-0 font-medium text-sm h-full">
            {tabs.map((item, index) => (
              <motion.li
                key={item.label}
                initial={false}
                className="h-full relative flex-1 min-w-0 cursor-pointer select-none px-4 py-2 flex items-center justify-between"
                onClick={() => handleTabClick(index, item.link)}
              >
                <span className="text-14-bold text-center w-full">{item.label}</span>

                {index !== tabs.length - 1 && (
                  <span className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[18px] w-[2px] bg-foreground/20"></span>
                )}

                {item === selectedTab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-blue-400"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </nav>

        <main className="container">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <Fragment key={selectedTab.label}></Fragment>
            ) : (
              <motion.div
                key={selectedTab.label}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </Fragment>
  );
};

export default ExploreTabs;
