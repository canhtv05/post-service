import { ChangeEvent, KeyboardEvent, ReactNode } from "react";

export type AvatarPropsType = {
  alt?: string;
  src: string;
  fallback?: string;
  tick?: boolean;
  creator?: boolean;
  render?: ReactNode;
  withLink?: boolean;
};

export type AvatarDataType = {
  username: string;
};

export type SearchBarProps = {
  query: string;
  setQuery: (query: string) => void;
  handleSearchCard: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  handleSearch: (e: KeyboardEvent<HTMLInputElement>) => void;
  isShowSearchCard: boolean;
};

export type UserCardType = {
  alt?: string;
  src: string;
  fallback?: string;
  tick?: boolean;
  creator?: boolean;
  bio: string;
  username: string;
  firstName: string;
  lastName: string;
  followers: number;
};

export type Side = "top" | "right" | "bottom" | "left";
