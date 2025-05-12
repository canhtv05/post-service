import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function partHashtag(hashtag: string) {
  const part: string[] = hashtag.split(/(\#[a-zA-Z0-9_]+)/g);
  return part;
}
