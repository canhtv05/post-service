import { ReactNode } from "react";

export type AvatarProps = {
  alt?: string;
  src: string;
  fallback?: string;
  tick?: boolean;
  creator?: boolean;
  hasTooltip?: boolean;
  render?: ReactNode;
};

export type Side = "top" | "right" | "bottom" | "left";
