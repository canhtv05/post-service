"use client";

import { Fragment, memo, MouseEventHandler, useMemo } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

import { AvatarFallback, AvatarImage, Avatar } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import { cn, partHashtag } from "@/lib/utils";
import RenderIf from "./RenderIf";
import Tooltip from "./Tooltip";
import { SettingsIcon, TickIcon } from "@/assets/icons";

const ProfileCard = ({
  props,
}: {
  props: { isFollowing?: boolean; onFollow: MouseEventHandler<HTMLButtonElement> };
}) => {
  const { isFollowing, onFollow } = props;
  const text: string =
    "Lorem ipsum dolor sit amet consectetur adipisicing adipisicing adipisicing adipisicing adipisicing elit. Eum,  #black consectetur?";
  const parts = useMemo(() => partHashtag(text), []);
  const tick = true;
  const creator = true;

  return (
    <section aria-labelledby="profile-card" className="flex justify-between space-x-4" role="region">
      <Link href={``}>
        <Avatar className="size-[54px]" aria-label="User Avatar">
          <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
      </Link>
      <div className="space-y-1">
        <div className="flex justify-end">
          <Button
            asChild
            className={`${
              isFollowing ? `${cn(buttonVariants({ variant: "outline" }))} text-foreground` : "border"
            } !rounded-full`}
            onClick={onFollow}
            aria-pressed={isFollowing ? "true" : "false"}
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
      <div className="flex flex-col justify-center">
        <Link href={``}>
          <div className="flex">
            <h3 className="text-14-bold font-black line-clamp-1 hover:underline" id="profile-card">
              Rain Rain
            </h3>
            {tick && (
              <Tooltip content="Famous" arrow color="bg-foreground" classNameTrigger="cursor-pointer">
                <TickIcon className="ml-1 w-[15px] h-[15px]" />
              </Tooltip>
            )}
            {creator && (
              <Tooltip content="Creator" arrow color="bg-foreground" classNameTrigger="cursor-pointer">
                <SettingsIcon className="w-[18px] h-[18px] ml-1 fill-gray-500" />
              </Tooltip>
            )}
          </div>
          <span className="text-14-semibold font-semibold line-clamp-1">@rainrain</span>
        </Link>
      </div>
      <p className="text-[14px] mt-2 line-clamp-3">
        {parts.map((item, index) => (
          <Fragment key={index}>
            <RenderIf value={item.startsWith("#")}>
              <Link href={``}>
                <span key={index} className={"text-blue-500 cursor-pointer"}>
                  {item}
                </span>
              </Link>
            </RenderIf>
            <RenderIf value={!item.startsWith("#")}>
              <span key={index} className={"text-foreground"}>
                {item}
              </span>
            </RenderIf>
          </Fragment>
        ))}
      </p>
      <div className="flex mt-2">
        <div className="flex">
          <span className="text-14-bold font-black">1300</span>
          <span className="ml-1 text-14-semibold">Following</span>
        </div>
        <div className="flex ml-4">
          <span className="text-14-bold font-black">1</span>
          <span className="ml-1 text-14-semibold">Followers</span>
        </div>
      </div>
    </section>
  );
};

export default memo(ProfileCard);
