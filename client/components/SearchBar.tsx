"use client";

import { forwardRef } from "react";
import { CircleX, SearchIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import { Input } from "./ui/input";
import RenderIf from "./RenderIf";
import SearchCard from "./SearchCard";
import { SearchBarProps } from "@/types";

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ query, setQuery, handleSearchCard, handleFocus, handleSearch, isShowSearchCard }: SearchBarProps, ref) => {
    return (
      <div className="relative flex items-center border focus-within:ring-1 focus-within:ring-ring pl-2 rounded-full bg-transparent">
        <div className="flex-shrink-0">
          <SearchIcon className="size-5 text-muted-foreground" />
        </div>
        <Input
          value={query}
          placeholder="Search..."
          className="h-[44px] flex-1 rounded-full text-14-bold border-0 focus-visible:ring-0 shadow-none !bg-transparent"
          onChange={handleSearchCard}
          ref={ref}
          onFocus={handleFocus}
          onKeyDown={handleSearch}
        />
        <RenderIf value={!!query}>
          <CircleX className="size-5 text-muted-foreground mr-3 cursor-pointer" onClick={() => setQuery("")} />
        </RenderIf>

        <AnimatePresence>
          {!!query && isShowSearchCard && <SearchCard key="search-card" query={query} />}
        </AnimatePresence>
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";

export default SearchBar;
