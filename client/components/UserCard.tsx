"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

import { Avatar as AvatarContainer, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserCardType } from "@/types";
import Tooltip from "./Tooltip";
import { SettingsIcon, TickIcon } from "@/assets/icons";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const UserCard = ({ props }: { props: UserCardType }) => {
  const { src, alt, bio, creator, fallback, firstName, lastName, tick, username, followers, isFollowing, onFollow } =
    props;
  return (
    <div className="flex justify-between items-center  py-3 hover:bg-primary/10 rounded-lg px-2 transition-colors duration-200 cursor-pointer overflow-hidden">
      <Link href={`/@${username}`} className="flex-1">
        <div className="flex">
          <div className="flex items-center">
            <AvatarContainer className="lg:size-[55px] md:size-[50px] size-[40px]">
              <AvatarImage src={src} alt={alt || "avatar"} />
              <AvatarFallback>{fallback || "AV"}</AvatarFallback>
            </AvatarContainer>
          </div>
          <div className="flex flex-col px-2 min-w-0 w-full">
            <div className="flex items-center w-full">
              <span className="font-black lg:text-[16px] md:text-[14px] text-[12px] flex items-center min-w-0">
                <span className="truncate max-w-[110px] sm:max-w-[150px] md:max-w-[300px]">{`${firstName} ${lastName}`}</span>
                {tick && (
                  <Tooltip content="Famous" arrow color="bg-foreground" classNameTrigger="cursor-pointer">
                    <TickIcon className="ml-1 md:w-[15px] md:h-[15px] w-[13px] h-[13px]" />
                  </Tooltip>
                )}
                {creator && (
                  <Tooltip content="Creator" arrow color="bg-foreground" classNameTrigger="cursor-pointer">
                    <SettingsIcon className="md:w-[18px] md:h-[18px] w-[16px] h-[16px] ml-1 fill-gray-500" />
                  </Tooltip>
                )}
              </span>
            </div>
            <div className="flex items-center text-start leading-4 md:leading-5 lg:text-[16px] md:text-[14px] text-[12px] text-foreground/70 min-w-0">
              <span className="truncate max-w-[110px] sm:max-w-[150px] md:max-w-[300px]">{username}</span>
              <span className="mx-1 flex-shrink-0">·</span>
              <span className="font-bold text-foreground flex-shrink-0 whitespace-nowrap">
                {followers}
                <span className="ml-1 text-foreground/70">Followers</span>
              </span>
            </div>
            <div className="min-w-0 max-w-[110px] sm:max-w-[150px] md:max-w-[300px]">
              <span className="text-start leading-4 md:leading-5 lg:text-[15px] md:text-[13px] text-[11px] text-foreground truncate block">
                {bio}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div>
        <Button
          asChild
          className={`${
            isFollowing ? `${cn(buttonVariants({ variant: "outline" }))} text-foreground` : "border"
          } !rounded-full`}
          onClick={onFollow}
        >
          <div>
            <div
              className={`2xl:text-[14px] text-[12px] font-black ${
                isFollowing ? "text-foreground" : "!text-background"
              }`}
            >{`${isFollowing ? "Following" : "Follow"}`}</div>
            {isFollowing && <Check className="size-3" />}
          </div>
        </Button>
      </div>
    </div>
  );
};

export default memo(UserCard);
