import React, { useState } from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "@/assets/icons";
import SuggestionAccount from "./SuggestionAccount";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

type List = { id: number; isFollowing: boolean }[];

const Sidebar = () => {
  const [list, setList] = useState<List>([
    { id: 1, isFollowing: true },
    { id: 2, isFollowing: true },
    { id: 3, isFollowing: false },
  ]);

  const handleToggleFollow = (id: number) => {
    setList((prev) => prev.map((i) => (i.id === id ? { ...i, isFollowing: !i.isFollowing } : i)));
  };

  return (
    <div className="my-2 ml-10 flex-1 w-[35%]">
      <div className="relative flex items-center border focus-within:ring-1 focus-within:ring-ring pl-2 rounded-full bg-transparent">
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search..."
          className="h-[44px] rounded-full text-14-bold border-0 focus-visible:ring-0 shadow-none !bg-transparent"
        />
      </div>

      <Card className="bg-background mt-6">
        <CardHeader>
          <CardTitle className="text-20 font-bold">Suggested accounts</CardTitle>
        </CardHeader>
        <CardContent>
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
            <span className="text-12-bold">See more</span>
          </Button>
        </CardFooter>
      </Card>

      <Card className="bg-background mt-6">
        <CardHeader>
          <CardTitle className="text-20 font-bold">
            <h1>Suggested accounts</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
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
            <span className="text-12-bold">See more</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Sidebar;
