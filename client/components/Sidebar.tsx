import { AnimatePresence } from "framer-motion";
import { ChangeEvent, useState } from "react";

import { Input } from "./ui/input";
import { SearchIcon } from "@/assets/icons";
import SuggestionAccount from "./SuggestionAccount";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useClickOutside, useViewport } from "@/hooks";
import SearchCard from "./SearchCard";
import { CircleX } from "lucide-react";
import RenderIf from "./RenderIf";

type List = { id: number; isFollowing: boolean }[];

const Sidebar = () => {
  const { width } = useViewport();

  const [query, setQuery] = useState<string>("");
  const [isShowSearchCard, setIsShowSearchCard] = useState<boolean>(false);
  const ref = useClickOutside(() => setIsShowSearchCard(false));

  const [list, setList] = useState<List>([
    { id: 1, isFollowing: true },
    { id: 2, isFollowing: true },
    { id: 3, isFollowing: false },
  ]);

  const handleToggleFollow = (id: number) => {
    setList((prev) => prev.map((i) => (i.id === id ? { ...i, isFollowing: !i.isFollowing } : i)));
  };

  const handleSearchCard = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsShowSearchCard(true);
  };

  const handleFocus = () => {
    if (!!!query) return;
    setIsShowSearchCard(true);
  };

  return (
    <div className="my-2 ml-6 flex-1 w-[35%]">
      <div className="relative flex items-center border focus-within:ring-1 focus-within:ring-ring pl-2 rounded-full bg-transparent">
        <div className="flex-shrink-0">
          <SearchIcon className="size-5 text-muted-foreground" />
        </div>
        <Input
          value={query}
          defaultValue={query}
          placeholder="Search..."
          className="h-[44px] flex-1 rounded-full text-14-bold border-0 focus-visible:ring-0 shadow-none !bg-transparent"
          onChange={handleSearchCard}
          ref={ref}
          onFocus={handleFocus}
        />
        <RenderIf value={!!query}>
          <CircleX className="size-5 text-muted-foreground mr-3 cursor-pointer" onClick={() => setQuery("")} />
        </RenderIf>

        <AnimatePresence>{!!query && isShowSearchCard && <SearchCard key="search-card" />}</AnimatePresence>
      </div>

      <Card className="bg-background mt-6">
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
