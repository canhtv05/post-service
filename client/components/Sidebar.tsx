"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import SuggestionAccount from "./SuggestionAccount";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useSearchBar, useViewport } from "@/hooks";
import SearchBar from "./SearchBar";
import RenderIf from "./RenderIf";

type List = { id: number; isFollowing: boolean }[];

const Sidebar = () => {
  const pathname: string = usePathname();
  const { width } = useViewport();
  const searchBarProps = useSearchBar();

  const [list, setList] = useState<List>([
    { id: 1, isFollowing: true },
    { id: 2, isFollowing: true },
    { id: 3, isFollowing: false },
  ]);

  const handleToggleFollow = (id: number) => {
    setList((prev) => prev.map((i) => (i.id === id ? { ...i, isFollowing: !i.isFollowing } : i)));
  };

  return (
    <div className="my-2 ml-6 flex-1 w-[35%]">
      <RenderIf value={!!!pathname.includes("/explore")}>
        <SearchBar {...searchBarProps} />
      </RenderIf>

      <Card className={`bg-background ${!!pathname.includes("/explore") ? "mt-0" : "mt-6"}`}>
        <CardHeader>
          <CardTitle className="xl:text-[20px] text-[16px] font-bold">Suggested accounts</CardTitle>
        </CardHeader>
        <CardContent className={`${width <= 1090 ? "px-3" : "px-6"}`}>
          {list.map((item, index) => (
            <SuggestionAccount
              key={index}
              isFollowing={item.isFollowing}
              onFollow={() => handleToggleFollow(item.id)}
            />
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant={"profile"}>
            <span className="text-14-bold">See more</span>
          </Button>
        </CardFooter>
      </Card>

      <div className="py-2 text-center flex justify-center items-end">
        <span className="text-12-semibold">Make by canhtv05 with ❤️</span>
        <span className="mx-2"></span>
        <span className="text-12-semibold">8/2025</span>
      </div>
    </div>
  );
};

export default Sidebar;
