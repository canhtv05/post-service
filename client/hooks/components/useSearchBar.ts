"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";

import { useClickOutside } from "@/hooks";

export const useSearchBar = (q: string, resetQuery: boolean = false) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeTab = searchParams.get("type") || "users";

  const [query, setQuery] = useState(q);
  const [isShowSearchCard, setIsShowSearchCard] = useState(false);

  const ref = useClickOutside(() => setIsShowSearchCard(false));

  const handleSearchCard = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsShowSearchCard(true);
  };

  const handleFocus = () => {
    if (!query) return;
    setIsShowSearchCard(true);
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    const q = query.trim();
    if (q.length === 0) return;
    if (e.key === "Enter") {
      setIsShowSearchCard(false);
      if (resetQuery) setQuery("");
      router.push(`/search?q=${q}&type=${typeTab}`);
    }
  };

  return {
    query,
    setQuery,
    handleSearchCard,
    handleFocus,
    handleSearch,
    isShowSearchCard,
    ref,
  };
};
