import { TypePageTabs } from "@/enums";

export const WIDTH_RESPONSIVE = 1000;

const allIngredients = [
  { label: "Trending", link: "trending", type: TypePageTabs.EXPLORE },
  { label: "News", link: "news", type: TypePageTabs.EXPLORE },
  { label: "User", link: "users", type: TypePageTabs.SEARCH },
  { label: "Posts", link: "posts", type: TypePageTabs.SEARCH },
];

const [trending, news, users, posts] = allIngredients;
export const tabsExplore = [trending, news];
export const tabsSearch = [users, posts];
