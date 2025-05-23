"use client";

import { ReactNode } from "react";

import { Tooltip as TooltipContainer, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Side } from "@/types";

const Tooltip = ({
  arrow = false,
  content,
  side = "top",
  delayDuration,
  classNameTrigger,
  color = "bg-secondary",
  children,
}: {
  arrow?: boolean;
  content: string;
  side?: Side;
  delayDuration?: number;
  classNameTrigger?: string;
  color?: string;
  children: ReactNode;
}) => {
  return (
    <TooltipProvider>
      <TooltipContainer delayDuration={delayDuration}>
        <TooltipTrigger className={classNameTrigger}>{children}</TooltipTrigger>
        <TooltipContent arrow={arrow} side={side} color={color}>
          <span className="text-10-bold">{content}</span>
        </TooltipContent>
      </TooltipContainer>
    </TooltipProvider>
  );
};

export default Tooltip;
