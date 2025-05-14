import { ChangeEvent, KeyboardEvent, ReactNode } from "react";

export type AvatarPropsType = {
  alt?: string;
  src: string;
  fallback?: string;
  tick?: boolean;
  creator?: boolean;
  render?: ReactNode;
  withLink?: boolean;
  isSearch?: boolean;
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
  isFollowing?: boolean;
  onFollow?: () => void;
};

export type NewsCardType = {
  tick?: boolean;
  creator?: boolean;
  firstName: string;
  lastName: string;
  content: string;
  hashtag: string;
};

export type PostCardType = {
  alt?: string;
  src: string;
  fallback?: string;
  tick?: boolean;
  creator?: boolean;
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  content: string;
  hashtag: string;
  followers: number;
  isFollowing?: boolean;
  onFollow?: () => void;
  images?: string[];
};

export type TabType = {
  label: string;
  link: string;
  type: string;
};

export type Side = "top" | "right" | "bottom" | "left";
