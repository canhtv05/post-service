"use client";

import React from "react";
import { use } from "react";

import Users from "./users/page";
import RenderIf from "@/components/RenderIf";
import Posts from "./posts/page";
import { TypeTabs } from "@/enums";

const Search = ({ searchParams }: { searchParams: Promise<{ q: string; type: string }> }) => {
  const { type } = use(searchParams);

  return (
    <div>
      <RenderIf value={type === TypeTabs.USERS}>
        <Users />
      </RenderIf>
      <RenderIf value={type === TypeTabs.POSTS}>
        <Posts />
      </RenderIf>
      <RenderIf value={type !== TypeTabs.POSTS && type !== TypeTabs.USERS}>
        {/* default page */}
        <Users />
      </RenderIf>
    </div>
  );
};

export default Search;
