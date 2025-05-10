"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";

import { useClickOutside } from "@/hooks";

export const useSearchBar = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");
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
    if (e.key === "Enter") {
      setQuery("");
      router.push(`${query}`);
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
