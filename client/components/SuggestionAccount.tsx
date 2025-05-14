"use client";

import { memo, MouseEventHandler } from "react";
import { Check } from "lucide-react";

import Account from "./Account";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import ProfileCard from "./ProfileCard";

const SuggestionAccount = ({
  isFollowing,
  onFollow,
}: {
  isFollowing?: boolean;
  onFollow: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="my-4 flex justify-between items-center" role="listitem">
      <Account
        props={{
          src: "https://github.com/shadcn.png",
          creator: true,
          tick: true,
          render: <ProfileCard props={{ isFollowing, onFollow }} />,
        }}
        data={{ username: "rainrain" }}
        aria-labelledby="account-info"
      />
      <Button
        asChild
        className={`${
          isFollowing ? `${cn(buttonVariants({ variant: "outline" }))} text-foreground` : "border"
        } !rounded-full`}
        onClick={onFollow}
        aria-label={isFollowing ? "Unfollow this account" : "Follow this account"}
      >
        <div>
          <div
            className={`2xl:text-[14px] text-[12px] font-black ${isFollowing ? "text-foreground" : "!text-background"}`}
          >{`${isFollowing ? "Following" : "Follow"}`}</div>
          {isFollowing && <Check className="size-3" />}
        </div>
      </Button>
    </div>
  );
};

export default memo(SuggestionAccount);
