import React, { MouseEventHandler } from "react";
import Avatar from "./Avatar";
import { Button, buttonVariants } from "./ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const SuggestionAccount = ({
  isFollowing,
  onFollow,
}: {
  isFollowing?: boolean;
  onFollow: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="my-4 flex justify-between items-center">
      <Avatar props={{ src: "https://github.com/shadcn.png", creator: true }} />
      <Button
        asChild
        className={`${
          isFollowing ? `${cn(buttonVariants({ variant: "outline" }))} text-foreground` : "border"
        } !rounded-full`}
        onClick={onFollow}
      >
        <div>
          <div className={`text-12-bold ${isFollowing ? "text-foreground" : "!text-background"}`}>{`${
            isFollowing ? "Following" : "Follow"
          }`}</div>
          {isFollowing && <Check className="size-3" />}
        </div>
      </Button>
    </div>
  );
};

export default SuggestionAccount;
