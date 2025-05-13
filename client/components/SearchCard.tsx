"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "./ui/card";
import Account from "./Account";
import { Button } from "./ui/button";
import { memo } from "react";

const SearchCard = ({ query }: { query: string }) => {
  return (
    <div className="absolute top-12 z-10 w-full right-0">
      <motion.div
        key="search-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <Card className="shadow-lg">
          <CardContent className="px-0">
            {new Array(5).fill(null).map((_, index: number) => (
              <div key={index} className="py-2 hover:bg-primary/10 px-6 transition-colors duration-200 cursor-pointer">
                <Account
                  props={{
                    src: "https://github.com/shadcn.png",
                    creator: true,
                    tick: true,
                  }}
                  data={{
                    username: "rainrain",
                  }}
                />
              </div>
            ))}
          </CardContent>

          <CardFooter>
            <Button asChild variant="profile">
              <Link href={`/search?q=${query}&type=users`}>
                <span className="text-14-bold flex max-w-full items-center">
                  See all
                  <span className="truncate max-w-[140px] overflow-hidden whitespace-nowrap ml-2">{query}</span>
                </span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default memo(SearchCard);
